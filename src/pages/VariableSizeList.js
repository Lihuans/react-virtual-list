import VariableSizeListComponent from "../components/VariableSizeListComponent";
const rowSizes = new Array(1000).fill(true).map(() => 25 + Math.round(Math.random() * 55))
const getItemSize = (index) => rowSizes[index];

const Row = ({ index, style }) => {
  return (
    <div className={index % 2 ? 'list-item-odd' : 'list-item-even'} style={style} >
      Row {index}
    </div>
  )
}

const VariableSizeList = () => {
  return (
    <VariableSizeListComponent
      className="list"
      height={200}
      width={200}
      itemSize={getItemSize}
      itemCount={1000}
    >
      {Row}
    </VariableSizeListComponent>
  );
}

export default VariableSizeList