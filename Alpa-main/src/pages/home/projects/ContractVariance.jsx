import React from 'react'
import { FaSearch } from 'react-icons/fa'

const ContractVariance = () => {
    return (
        <div>

            <div className='my-4 flex justify-between items-center'>
                <h5 className='font-semibold text-gray-700'>Contract Variance</h5>
                <div className='flex items-center space-x-3'>
                    <div className='flex items-center border border-gray-300 rounded-full px-3 py-[3px]'>
                        <FaSearch className='text-gray-400' />
                        <input type="text" className='flex-1 px-3 py-[3px] border-none outline-none bg-transparent' placeholder='Search' />
                    </div>
                    <div>
                        <label htmlFor="filter">Group By:</label>
                        <select id="filter" className='outline-none border border-gray-300 py-1.5 px-2 rounded-full ml-2'>
                            <option value="">none</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='border rounded-md mb-3 overflow-auto'>
                <table className='w-full home_page_table'>
                    <thead className='bg-gray-100 border-b'>
                        <tr>
                            <th>Project Name</th>
                            <th>Project Number</th>
                            <th>Original Contract Value</th>
                            <th>Approved COs</th>
                            <th>Revised Contract</th>
                            <th>Payment Received</th>
                            <th>Revised Committed</th>
                            <th>Payments to Date</th>
                            <th>Payments Remaining</th>
                            <th>Variance</th>
                            <th>Person Uncommitted</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>LPH_Canyon Visto - Int Reno</td>
                            <td>23-032</td>
                            <td>$1,000,000</td>
                            <td>$0.00</td>
                            <td>$1,000,000</td>
                            <td>$3,434,1</td>
                            <td>$1,000,000</td>
                            <td>$34,123</td>
                            <td>$0.00</td>
                            <td>$5,321,12</td>
                            <td>79.41%</td>
                        </tr>
                        <tr>
                            <td>LPH_Canyon Visto - Int Reno</td>
                            <td>23-032</td>
                            <td>$1,000,000</td>
                            <td>$0.00</td>
                            <td>$1,000,000</td>
                            <td>$3,434,1</td>
                            <td>$1,000,000</td>
                            <td>$34,123</td>
                            <td>$0.00</td>
                            <td>$5,321,12</td>
                            <td>79.41%</td>
                        </tr>
                        <tr>
                            <td>LPH_Canyon Visto - Int Reno</td>
                            <td>23-032</td>
                            <td>$1,000,000</td>
                            <td>$0.00</td>
                            <td>$1,000,000</td>
                            <td>$3,434,1</td>
                            <td>$1,000,000</td>
                            <td>$34,123</td>
                            <td>$0.00</td>
                            <td>$5,321,12</td>
                            <td>79.41%</td>
                        </tr>
                        <tr>
                            <td>LPH_Canyon Visto - Int Reno</td>
                            <td>23-032</td>
                            <td>$1,000,000</td>
                            <td>$0.00</td>
                            <td>$1,000,000</td>
                            <td>$3,434,1</td>
                            <td>$1,000,000</td>
                            <td>$34,123</td>
                            <td>$0.00</td>
                            <td>$5,321,12</td>
                            <td>79.41%</td>
                        </tr>
                        <tr>
                            <td>LPH_Canyon Visto - Int Reno</td>
                            <td>23-032</td>
                            <td>$1,000,000</td>
                            <td>$0.00</td>
                            <td>$1,000,000</td>
                            <td>$3,434,1</td>
                            <td>$1,000,000</td>
                            <td>$34,123</td>
                            <td>$0.00</td>
                            <td>$5,321,12</td>
                            <td>79.41%</td>
                        </tr>
                        <tr>
                            <td>LPH_Canyon Visto - Int Reno</td>
                            <td>23-032</td>
                            <td>$1,000,000</td>
                            <td>$0.00</td>
                            <td>$1,000,000</td>
                            <td>$3,434,1</td>
                            <td>$1,000,000</td>
                            <td>$34,123</td>
                            <td>$0.00</td>
                            <td>$5,321,12</td>
                            <td>79.41%</td>
                        </tr>
                        <tr>
                            <td>LPH_Canyon Visto - Int Reno</td>
                            <td>23-032</td>
                            <td>$1,000,000</td>
                            <td>$0.00</td>
                            <td>$1,000,000</td>
                            <td>$3,434,1</td>
                            <td>$1,000,000</td>
                            <td>$34,123</td>
                            <td>$0.00</td>
                            <td>$5,321,12</td>
                            <td>79.41%</td>
                        </tr>
                        <tr>
                            <td>LPH_Canyon Visto - Int Reno</td>
                            <td>23-032</td>
                            <td>$1,000,000</td>
                            <td>$0.00</td>
                            <td>$1,000,000</td>
                            <td>$3,434,1</td>
                            <td>$1,000,000</td>
                            <td>$34,123</td>
                            <td>$0.00</td>
                            <td>$5,321,12</td>
                            <td>79.41%</td>
                        </tr>
                        <tr>
                            <td>LPH_Canyon Visto - Int Reno</td>
                            <td>23-032</td>
                            <td>$1,000,000</td>
                            <td>$0.00</td>
                            <td>$1,000,000</td>
                            <td>$3,434,1</td>
                            <td>$1,000,000</td>
                            <td>$34,123</td>
                            <td>$0.00</td>
                            <td>$5,321,12</td>
                            <td>79.41%</td>
                        </tr>
                    </tbody>
                    <tfoot className='border-t'>
                        <tr>
                            <td></td>
                            <td className='text-orange-400'>Page Subtotal:</td>
                            <td>$207,227,43</td>
                            <td>$0.00</td>
                            <td>$25,345,23</td>
                            <td>$25,345,23</td>
                            <td>$25,345,23</td>
                            <td>$25,345,23</td>
                            <td>$25,345,23</td>
                            <td>$25,345,23</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className='text-orange-400'>Grand Total:</td>
                            <td>$207,227,43</td>
                            <td>$0.00</td>
                            <td>$25,345,23</td>
                            <td>$25,345,23</td>
                            <td>$25,345,23</td>
                            <td>$25,345,23</td>
                            <td>$25,345,23</td>
                            <td>$25,345,23</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    )
}

export default ContractVariance