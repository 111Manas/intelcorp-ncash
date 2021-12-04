type Props = {
    data?: any
}

const CustomTable: React.FC<Props> = ({ data: any }) => {
    return (
        <table className="custom-table">
            <thead>
                <tr>
                    <th scope="col">Employee Code</th>
                    <th scope="col">Date</th>
                    <th scope="col">Employee Name</th>

                    <th scope="col">Mobile</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>DET001</td>
                    <td>17-09-2021</td>
                    <td>John Smith</td>
                    <td>+91 9976543210</td>
                    <td>john@smith.com</td>
                    <td>73,129</td>
                    <td><button className='btn btn-light'> Active</button></td>
                </tr>
                <tr>
                    <td>DET001</td>
                    <td>17-09-2021</td>
                    <td>John Smith</td>
                    <td>+91 9976543210</td>
                    <td>john@smith.com</td>
                    <td>73,129</td>
                    <td><button className='btn btn-light'> Active</button></td>
                </tr>
                <tr>
                    <td>DET001</td>
                    <td>17-09-2021</td>
                    <td>John Smith</td>
                    <td>+91 9976543210</td>
                    <td>john@smith.com</td>
                    <td>73,129</td>
                    <td><button className='btn btn-light'> Active</button></td>
                </tr>
                <tr>
                    <td>DET001</td>
                    <td>17-09-2021</td>
                    <td>John Smith</td>
                    <td>+91 9976543210</td>
                    <td>john@smith.com</td>
                    <td>73,129</td>
                    <td><button className='btn btn-light'> Active</button></td>
                </tr>
                <tr>
                    <td>DET001</td>
                    <td>17-09-2021</td>
                    <td>John Smith</td>
                    <td>+91 9976543210</td>
                    <td>john@smith.com</td>
                    <td>73,129</td>
                    <td><button className='btn btn-light'> Active</button></td>
                </tr>
            </tbody>
        </table>
    )
}
export default CustomTable