import { PaymentApp } from "./pages/PaymentApp";
import { ZelleReceipt } from "./pages/ZelleReceipt";
import { ChimeReceipt } from "./pages/ChimeReceipt";
import { PaypalReceipt } from "./pages/PaypalReceipt";
import { ChimeFakeReceipt } from "./pages/fake-receipt/ChimeFakeReceipt";
import { ZelleFakeReceipt } from "./pages/fake-receipt/ZelleFakeReceipt";

function App() {
  return (
    <main >
      <PaymentApp />
    </main> 
  );
}

export default App;
