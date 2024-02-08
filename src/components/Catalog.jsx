import CardProduct from "./CardProduct";

export default function Catalog() {
  return (
    <div>
      Catalog component
      <ul>
        <li>
          <CardProduct />
        </li>
        <li>
          <CardProduct />
        </li>
        <li>
          <CardProduct />
        </li>
      </ul>
    </div>
  );
}
