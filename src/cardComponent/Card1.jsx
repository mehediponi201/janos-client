import './Card.css';

const Card1 = () => {
    return (
        <div className='mt-4'>
            <div className="easy-am-sms">
                <header className="easy-am-sms-header">
                    <h1>EasyAM-SMS</h1>
                    <h3 className='text-sm'>EasyAM-SMS Share Management Systems</h3>
                </header>
                <h3 className='text-5xl font-bold mt-8'> <span style={{ color: '#003366' }}>EasyAM-SMS</span> Share Management Systems</h3>
                <section className="easy-am-sms-content">
                    <h3 className='font-medium'>Shares Management of public limited company with core functionalities as follows:</h3>
                    <ul className='mt-3'>
                        <li>Organize core A/C: Shareholders, CDS Link, Group, Tax, Banks & Branches with Transactions & Queries</li>
                        <li>Manual Share Transfer/Movements, Endorsement of Share Transfer, Electronic Transfer Interface with CDS, Management Queries & Tools</li>
                        <li>Shares/Certificates Conversion Management: Paper Certificate Maintenance with transaction options, Demat, Remat Certificates, Transmission of Certificates, comprehensive views, registers, reports, documentation</li>
                        <li>Demat process facilitates conversion of paper certificates into electronic shares with integrity of dematerializing transactions and Remat process facilitates conversion of electronic shares into paper share certificates</li>
                        <li>Dividend process facilitates creation of batch of yearly dividend of both Cash & Stock Dividend, Value of Fractional Bonus Share, Processing of Online EFT Dividend Amount through BEFTN, Preparation of Dividend Warrants for returned dividend from BEFTN, Payment Advice to Bank for Dividend Payable, Updating Bonus shares to CDS</li>
                        <li>Tax computation and return of tax deduction at source, Tax Certificate as per NBR to each shareholder by email</li>
                        <li>Mailing process facilitates Dividend Notice to each shareholder by SMS & Email, Courier Data Management system for Dividend Warrants</li>
                    </ul>

                    <h3>REPORTS facilitate to provide necessary documents</h3>
                    <ul>
                        <li>Group Summary</li>
                        <li>Shareholders list</li>
                        <li>Blank list of electronic address</li>
                        <li>Member Register</li>
                        <li> Return of Shareholders (as per Sch-10, GoB)</li>
                        <li>Return of allotment (as per Sch-15, GoB)</li>
                        <li>Return of Deductions (Tax & Gov Charges)</li>
                        <li>Periodical Dividend Summary</li>
                        <li>DBI-24 Report for Bangladesh Bank</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Card1;