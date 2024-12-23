// ADD IMPORTS BACK FOR GRAPHS SECTION
// import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
// import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
// import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';
import axios from 'axios';

const handleDownload = () => {
  // Define the URL to fetch data from
  const apiUrl = 'https://hrf-asylum-be-b.herokuapp.com/cases';

  axios
    .get(apiUrl)
    .then(response => {
      // Check if the response status is OK (status code 200)
      if (response.status === 200) {
        // Get the data from the response
        const data = response.data;

        // Converted the data to a JSON string
        const plainTextData = JSON.stringify(data, null, 2);

        // Create a Blob (Binary Large Object) from the JSON data
        const blob = new Blob([plainTextData], { type: 'text/plain' });

        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create an anchor element for the download link
        const downloadLink = document.createElement('a');

        // Set the href attribute to the Blob's URL
        downloadLink.href = url;

        // Set the download attribute to specify the filename
        downloadLink.download = 'asylum_data.txt';

        // Simulate a click on the anchor element to trigger the download
        downloadLink.click();

        // Clean up by revoking the URL
        URL.revokeObjectURL(url);
      } else {
        // console.error(Error: Received status code ${response.status});
      }
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
};

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();
  const style = { backgroundColor: '#404C4A', color: '#FFFFFF' }; // Define the style variable

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>
      <div className="graphs-section">
        <div className="imageSectionFirstImage">
          <img src={GrantRatesByOfficeImg} alt="Grant Rates By Office" />
          <h3>Search Grant Rate By Office</h3>
        </div>
        <div className="imageSection2">
          <img
            src={GrantRatesByNationalityImg}
            alt="Grant Rates By Nationality"
          />
          <h3>Grant Rates By Nationality</h3>
        </div>
        <div className="imageSection3">
          <img src={GrantRatesOverTimeImg} alt="Grant Rates Over Time" />
          <h3>Grant Rates Over Time</h3>
        </div>
      </div>
      <div className="buttonsView&Download">
        {' '}
        <div className="view-more-data-btn-container">
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            onClick={() => history.push('/graphs')}
          >
            View the Data
          </Button>
          <div className="download-data-btn-container">
            <Button
              id="download-button"
              type="default"
              style={style}
              onClick={handleDownload}
            >
              Download the Data
            </Button>
          </div>
        </div>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>
        <div className="bottom-section">
          <h2 className="disparity-heading">Systemic Disparity Insights</h2>
          <div className="insights">
            <div className="insight">
              <h2 className="percentage">36%</h2>
              <p className="description">
                By the end of the Trump administration, the average asylum
                office grant rate had fallen 36 percent from an average of 44
                percent in fiscal year 2016 to 28 percent in fiscal year 2020.
              </p>
            </div>
            <div className="insight">
              <h2 className="percentage">5%</h2>
              <p className="description">
                The New York asylum office grant rate dropped to 5 percent in
                fiscal year 2020.
              </p>
            </div>
            <div className="insight">
              <h2 className="percentage">6x Lower</h2>
              <p className="description">
                Between fiscal year 2017 and 2020, the New York asylum office's
                average grant rate was six times lower than the San Francisco
                asylum office.
              </p>
            </div>
          </div>
        </div>

        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
