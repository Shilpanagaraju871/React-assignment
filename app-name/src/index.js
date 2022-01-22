import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
const ApiTable = () => {

  const url = 'https://jsonplaceholder.typicode.com/users';

  const [data, setData] = useState([]);

  useEffect(() => {

    setData([data]);

    axios.get(url)

    .then(json => console.log(json))

  }, []);

  const renderTable = () => {
    return data.map((user) => {

      const { name, email, address, company } = user;

      return (
        <div>
         <thead>
             <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Address</th>
               <th>Company</th>
             </tr>
        </thead>
        <tbody>
        <tr>
            <td>name</td>
            <td>email</td>
            <td>address</td>
            <td>company</td>
          </tr>
          </tbody>
          </div>
