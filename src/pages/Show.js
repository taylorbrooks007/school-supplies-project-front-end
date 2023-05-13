import { Link } from "react-router-dom";
import SupplyDetails from "../components/SupplyDetails"

export default function Show({handleCartTotal}) {
  return (
    <div>
      <SupplyDetails handleCartTotal={handleCartTotal} />
    </div>
  );
}
