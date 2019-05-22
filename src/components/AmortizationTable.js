import React from 'react';
import { DataTable, TableHeader } from 'react-mdl';
import PropTypes from 'prop-types';
function AmortizationTable({ rows }) {
    return (
        <div>
            <h3>Result</h3>

            <DataTable rows={rows} style={{ width: '95%', margin: 'auto', paddingBottom: '2%' }} shadow={0}>
                <TableHeader name="cuota" tooltip="Fee number">Fee</TableHeader>
                <TableHeader numeric name="capital" tooltip="Capital this month">Capital</TableHeader>
                <TableHeader numeric name="interes" tooltip="Interest this month">Interest</TableHeader>
                <TableHeader numeric name="total" tooltip="Amount to pay">Amount</TableHeader>
            </DataTable>
        </div>

    );
}
AmortizationTable.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.shape(
        {
            name: PropTypes.string.isRequired
        }
    ))
    //rows: PropTypes.array.isRequired
}
export default AmortizationTable;