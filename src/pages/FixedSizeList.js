import FixedSizeListComponent from "../components/FixedSizeListComponent";
const Row = ({ index, style, forwardRef }) => {
  return (
    <div className={index % 2 ? 'list-item-odd' : 'list-item-even'} style={style} ref={forwardRef}>
      {`Row ${index}`}
    </div>
  )
}

const FixedSizeList = () => {
  return (
    <FixedSizeListComponent
      className="list"
      height={200}
      width={200}
      itemSize={50}
      itemCount={1000}
    >
      {Row}
    </FixedSizeListComponent>
  );
}

export default FixedSizeList