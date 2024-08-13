import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function CheckoutPage() {
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const totalAmount = location.state?.price || 0;

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST request to the backend
      await axios.post("http://localhost:8080/api/checkout", {
        firstName,
        lastName,
        address1,
        address2,
        zip,
        city,
        state,
        phone,
        email,
      });
      setIsModalOpen(true);
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/pay", { state: { totalAmount } });
  };

  // const handleOrder = (e) => {
  //   e.preventDefault();
  //   const finalTotalAmount = totalAmount + 200 + 100;
  //   //navigate("/pay", { state: { totalAmount } });
  //   localStorage.setItem("totalAmount", finalTotalAmount);
  //   navigate("/pay");
  // };

  const handleOrder = (e) => {
    e.preventDefault();
    
    // Calculate the final total amount
    const finalTotalAmount = totalAmount + 200 + 100; // Total amount plus shipping cost and taxes
  
    // Create an object to hold all the data you want to pass
    const orderDetails = {
      firstName,
      lastName,
      address1,
      address2,
      zip,
      city,
      state,
      phone,
      email,
      totalAmount: finalTotalAmount, // Updated total amount
      shippingCost: 200,
      taxes: 100
    };
  
    // Store the total amount in localStorage if needed
    //localStorage.setItem("totalAmount", finalTotalAmount);
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
  
    // Navigate to the /pay page with order details
    navigate("/pay", { state: orderDetails });
  };
  

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className={`max-w-5xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6 ${isModalOpen ? "blur-sm" : ""}`}>
        {/* Shipping Address Form */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="address1">
                Address 1
              </label>
              <input
                id="address1"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="address2">
                Address 2 (Optional)
              </label>
              <input
                id="address2"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="zip">
                  Zip
                </label>
                <input
                  id="zip"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="city">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="state">
                  State
                </label>
                <select
                  id="state"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option>Select State</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="In case questions arise"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="To receive order confirmation"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping to:</span>
              <div className="text-right">
                <span className="block">{address1}</span>
                <span className="block">{address2}</span>
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping Cost:</span>
              <span>₹ 200</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Duties & Taxes:</span>
              <span>₹ 100</span>
            </div>
            <div className="flex justify-between font-semibold mb-4">
            <span>Total Amount:</span>
            <span>₹{totalAmount + 200 + 100}</span>
            </div>
            <button
              onClick={handleOrder}
              className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      


      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-lg shadow-lg z-10 max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">Entered Details</h2>
            <p>
              <strong>First Name:</strong> {firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {lastName}
            </p>
            <p>
              <strong>Address 1:</strong> {address1}
            </p>
            <p>
              <strong>Address 2:</strong> {address2}
            </p>
            <p>
              <strong>Zip:</strong> {zip}
            </p>
            <p>
              <strong>City:</strong> {city}
            </p>
            <p>
              <strong>State:</strong> {state}
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
