import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationnButton from '../NotificationButton';
import './styles.css';

//Início da função.

function SalesCard() {

    //Declarando as váriaveis do calendário.

    const min = new Date(new Date().setDate(new Date().getDate() - 365)); /**Declarando as variáveis que controlam as combos de data**/
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate,setMaxDate] = useState(max);

    useEffect(()=>{
        axios.get("http://localhost:8080/sales")
            .then(response => {
                console.log(response.data);
            })
    },[]);

    //Organização da estrutura do site.

    return (
        <div className="dsmeta-card"> 
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker /**Primeira input com o calendário */
                        selected={minDate}
                        onChange={(date:Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />

                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker /**Segunda input com o calendário */
                        selected={maxDate}
                        onChange={(date:Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />

                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr> {/*Personalizando o cabeçalho da tabela */}
                            <th className="show992">ID</th>
                            <th className="show576">DATA</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr> {/*Inserindo Dados nessa tabela*/}
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td> R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationnButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td> R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationnButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td> R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationnButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
           
        </div>
            
    )

}

export default SalesCard;