import './C2.css';

const Card3 = () => {
    return (
       <div className='mt-4'>
        <header className="easy-am-sms-header">
                    <h1>EasyAM-DPS</h1>
                    <h3 className='text-sm'>EasyAM-DPS Dividend Processing Services</h3>
        </header>
         <div className="platform-functionality">
         <h3 className='text-5xl font-bold mt-2'> <span style={{ color: '#003366' }}>EasyAM-DPS</span> Dividend Processing Services</h3>
         <h4 style={{ color: '#003366' }} className='text-2xl font-lg mt-4'>A thorough regulation from the securities regulator has been released to change how a firm declares and <br /> distributes its dividends.</h4>
        <ul>
            {/* <li>Inserting Banner of Company</li> */}
            <li className='mt-2'>
                <ul>
                    <li>- Data Integration Check</li>
                    <li>- Tax codification & Rate Marking</li>
                    <li>- Margin A/C Data Entry, Checking Processing and Updating</li>
                    <li>- Bank & Branch Checking in CDS Data and Routing ID Codification</li>
                    <li>- Integrated Regulatory Report (RRSD) Processing</li>
                    <li>- Dividend EFT over BEFTN Processing</li>
                    <li>- Directors & Folio Dividend Warrant Processing</li>
                    <li>- Dividend Notice Processing (bulk SMS & Email)</li>
                    <li>- BEFTN Returned Dividend Warrant Processing</li>
                    <li>- Tax Certificate Processing (NBR Format)</li>
                </ul>
            </li>
            
        </ul>
    </div>
       </div>
    );
};

export default Card3;