import React from 'react';
import { DataTable, TableHeader } from 'react-mdl';
import PropTypes from 'prop-types';
function AmortizationTable({ rows }) {
    return (
        <div>
            <DataTable rows={rows} style={{ width: '95%', margin: 'auto', paddingBottom: '2%' }} shadow={0}>
                <TableHeader name="cuota" tooltip="Fee number">Fee</TableHeader>
                <TableHeader numeric name="capital" tooltip="Capital this month">Capital</TableHeader>
                <TableHeader numeric name="interes" tooltip="Interest this month">Interest</TableHeader>
                <TableHeader numeric name="total" tooltip="Amount to pay">Amount</TableHeader>
                <TableHeader numeric name="saldo" tooltip="Remaining Capital">Remaining</TableHeader>
            </DataTable>
        </div>

    );
}
AmortizationTable.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.shape(
        {
            name: PropTypes.string.isRequired,
            capital: PropTypes.number.isRequired,
            interes: PropTypes.number.isRequired,
            total: PropTypes.number.isRequired,
            saldo: PropTypes.number.isRequired
        }
    ))
}
export default AmortizationTable;