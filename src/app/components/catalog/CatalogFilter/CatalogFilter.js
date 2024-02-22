import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { CatalogFilterItem } from '../CatalogFilterItem/CatalogFilterItem';

const CatalogFilter = ({filterCriterias}) => {

  const products = useSelector((state) => state.products.data);
  const filteredProducts = useSelector(state => state.filteredProducts.data);
  const filterSettings = useSelector(state => state.filterSettings.checkboxes);

  const [filterCriteriasWithTypes, setfilterCriteriasWithTypes] = useState([]);




  // ---------------------------------------------------------
  // ЗАГАЛЬНИЙ БЛОК (УНІВЕРСАЛЬНІ ФУНКЦІЇ)
  // ---------------------------------------------------------

  // Перевірка чи є МАССИВОМ ОБ'ЄКТІВ

  const isContainArrayOfObjects = (value) => {
    return Array.isArray(value) &&
      value.every((elementOfValue) => typeof elementOfValue === "object" && elementOfValue !== null);
  };

  // Перевірка типу значення, та приведення його до потрібного формату
  // НЕ массивів об'єктів! Строка, число, буль чи простий массив

  const normalizeValue = (value) => {
    if (typeof value === "string" || typeof value === "number") {
      return [value];
    } else if (typeof value === "boolean") {
      if (value) {
        return ["Yes"];
      } else {
        return ["No"];
      };
    } else if (Array.isArray(value) && value.length > 0) {
      return value;
    }
  };

  // Знаходження ВСІХ ЗНАЧЕНЬ за ШЛЯХОМ у форматі СТРОКИ keyword.keyword.keyword
  // і запис їх у массив

  const findValueByPath = (product, path) => {
    let result = [];
    let i = 0;
    const keywords = path.split(".");
    let arrayOfObjects = false;

    const searchCycle = (searchArea) => {
      const valueByKey = searchArea[keywords[i]];
        // Обробка якщо массив об'єктів, і потрібне розгалуження пошуку
        if (isContainArrayOfObjects(valueByKey)) {
          arrayOfObjects = valueByKey;
          i++;
          for (const oneObjectOfValue of valueByKey) {
            searchCycle(oneObjectOfValue);
          }
        }
        // Обробка якщо це не кінцевий шлях, йдемо далі
        else if (typeof valueByKey === "object" && !Array.isArray(valueByKey) && !isContainArrayOfObjects(valueByKey)) {
          i++;
          searchCycle(valueByKey);
        }
        // Обробка якщо пройшли ланцюжок шляху і значення є
        else if (valueByKey !== undefined && valueByKey !== null) {
          const normalizeValueByKey = normalizeValue(valueByKey);
          result = [...result, ...normalizeValueByKey]
        } 
        
  }
  searchCycle(product);
  return { value: result, arrayOfObjects: arrayOfObjects };
}

  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ЗАПОВНЕННЯ БЛОКУ ФІЛЬТРУ
  // ---------------------------------------------------------

  // Пошук усіх можливих варіантів у товарах та додання результату до критеріїв пошуку
  const addVariationsToFilterCriterias = () => {
    const updatedFilterCriterias = [];

    filterCriterias.forEach((criteria) => {
      criteria.types = [];

      products.forEach((product) => {
        const { value: findVariations } = findValueByPath(product, criteria.path);

        findVariations.forEach((findVariation) => {
          if (!criteria.types.includes(findVariation)) {
            criteria.types.push(findVariation);
          }
        });
      });
      updatedFilterCriterias.push({ title: criteria.title, types: criteria.types, path: criteria.path });
    });
    return updatedFilterCriterias;
  };



  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ОБРОБКА ФІЛЬТРАЦІЇ (ПІСЛЯ НАТИСКАННЯ КНОПКИ)
  // ---------------------------------------------------------


  const filterProducts = () => {
    const filteredProducts = [];
    const entriesOfFilterSettings = Object.entries(filterSettings);

    products.forEach((product) => {
      let isMatch = true;

      for (const [path, parametersOfSetting] of entriesOfFilterSettings) {
        const trueValues = Object.keys(parametersOfSetting).filter((key) => parametersOfSetting[key]);

        const { value, arrayOfObjects } = findValueByPath(product, path);

        // Відмічаємо "false" ті продукти, або частини продуктів, які нам НЕ підходять:

        // Якщо це значення з одним варіантом вибору
        if (value.length === 1 && !trueValues.includes(value[0]) && !arrayOfObjects) {
          isMatch = false;
        }
        // Якщо це массив значень (Наприклад, список функцій)
        else if (value.length > 1 && !trueValues.every((key) => value.includes(key)) && !arrayOfObjects) {
          isMatch = false;
        }
        // Якщо є массив об'єктів: фільтрація по КОЛЬОРАХ (адже кожен є ОКРЕМИМ товаром)
        else if (path === "colors.color" && arrayOfObjects) {
          const filteredColors = arrayOfObjects.filter((colorObject) => trueValues.includes(colorObject.color));
          if (filteredColors.length === 0) {
            isMatch = false;
          } else {
            product = { ...product, colors: filteredColors };
          }
          // Якщо є массив об'єктів: фільтрація по іншим критеріям
        } else if (arrayOfObjects && trueValues.some((trueValue) => value.includes(trueValue))) {
          isMatch = false;
        }
      }
      if (isMatch) {
        console.log(product);
      }
    });
  };

  const onFilterSubmit = () => {
    filterProducts();
  };


  useEffect(() => {
    setfilterCriteriasWithTypes(addVariationsToFilterCriterias());
  }, [filterCriterias, products]);

  return (
<div className='filter'>
        {filterCriteriasWithTypes.map((criteria) => (
          <>
          <CatalogFilterItem key={criteria.title} filterTitle={criteria.title} checkBoxNames={criteria.types} criteriaPath={criteria.path}/>
          <p>-----------------</p>
          </>
        ))}
        <button onClick={onFilterSubmit} className='filter__submit'>FILTER</button>
      </div>
  );
}

export {CatalogFilter};