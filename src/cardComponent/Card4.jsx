import './C2.css';

const Card4 = () => {
    return (
        <div className='mt-4'>
            <header className="easy-am-sms-header">
                <h1>EasyAM-RIP</h1>
                <h3 className='text-sm'>EasyAM-RIP Right Issue Processing</h3>
            </header>
            <div className="platform-functionality">
                <h3 className='text-5xl font-bold mt-2'> <span style={{ color: '#003366' }}>EasyAM-RIP</span> Right Issue Processing</h3>
                <ul>
                    <li style={{ color: '#003366' }} className='mt-5'>MAIN SEGMENTED JOBS</li>
                    <li className='mt-1'>
                        <ul>
                            <li>- SOURCE DATA - MERGING, PROCESSING & AUDITING</li>
                            <li>- OFFER PROCESSING</li>
                            <li>- APPLICATIONS PROCESSING</li>
                            <li>- ALLOTMENT PROCESSING</li>
                        </ul>
                    </li>
                    {/*  */}
                    <li style={{ color: '#003366' }} className='mt-5'>SOURCE DATA - MERGING, PROCESSING & AUDITING</li>
                    <li className='mt-1'>
                        <ul>
                            <li>- Data collection of electronic shares from CDBL as on Record date</li>
                            <li>- Data collection of paper shares (if any) from folios as on Record date</li>
                            <li>- Merging data</li>
                            <li>- Reconciliation of Demat data</li>
                            <li>- Rectification of mismatch demat data</li>
                            <li>- Integrated database auditing</li>
                            <li>- Reconciliation of total shares</li>
                            <li>- Data of allotted right shares merging</li>
                        </ul>
                    </li>
                    {/*  */}
                    <li style={{ color: '#003366' }} className='mt-5'>OFFER PROCESSING</li>
                    <li className='mt-1'>
                        <ul>
                            <li>- Processing eligible shares & offering shareholders</li>
                            <li>- Approval of eligible offers for document preparation</li>
                            <li>- Preparation of ROD including Offer letter & Application form</li>
                            <li>- Codification of Bankers to the right issue</li>
                        </ul>
                    </li>
                    {/*  */}
                    <li style={{ color: '#003366' }} className='mt-5'>APPLICATIONS PROCESSING</li>
                    <li className='mt-1'>
                        <ul>
                            <li>- Applications collection</li>
                            <li>- Marking codes of Banks & Branches in applications</li>
                            <li>- Data entry of right shares & amount</li>
                            <li>- Data entry of renounced shares & amount</li>
                            <li>- Data checking & editing</li>
                            <li>- Reconciliation of Bank & Branch wise shares & amount</li>
                            <li>- Unsubscribed shares and applications processing of underwritten shares</li>
                        </ul>
                    </li>
                    {/*  */}
                    <li style={{ color: '#003366' }} className='mt-5'>ALLOTMENT PROCESSING</li>
                    <li className='mt-1'>
                        <ul>
                            <li>- Refundable applicants</li>
                            <li>- Approval of allotment of right shares</li>
                            <li>- Allotment data processing</li>
                            <li>- Invalid BO IDs with mismatching & suspended with CDBL</li>
                            <li>- Data preparation for crediting right shares in CDS including suspended shares (if any)</li>
                            <li>- All compliance will be provided including shareholders complaints, processing unsubscribed/wrong applications jointly during the period of 60 days from the closing of rights share issue.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Card4;