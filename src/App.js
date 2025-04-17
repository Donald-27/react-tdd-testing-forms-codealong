import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [size, setSize] = useState("medium");
  const [contactInfo, setContactInfo] = useState("");

  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);
  const handleSizeChange = (e) => setSize(e.target.value);
  const handleContactChange = (e) => setContactInfo(e.target.value);

  return (
    <div>
      <h1>Place an Order</h1>
      <form>
        {/* Toppings */}
        <div>
          <h3>Toppings</h3>
          <input
            type="checkbox"
            id="pepperoni"
            checked={pepperoniIsChecked}
            aria-checked={pepperoniIsChecked}
            onChange={togglePepperoni}
          />
          <label htmlFor="pepperoni">Add pepperoni</label>
        </div>

        {/* Size */}
        <div>
          <h3>Size</h3>
          <select value={size} onChange={handleSizeChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        {/* Contact Info */}
        <div>
          <h3>Contact Info</h3>
          <input
            type="text"
            placeholder="Enter your email or phone"
            value={contactInfo}
            onChange={handleContactChange}
          />
        </div>

        {/* Summary */}
        <div>
          <h3>Your Selection</h3>
          <p>Size: {size}</p>
          <p>Toppings: {pepperoniIsChecked ? "Pepperoni" : "None"}</p>
          <p>Contact: {contactInfo || "N/A"}</p>
        </div>

        {/* Submit */}
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default App;
