import { InputBase } from "@mantine/core";

const Step1Component = () => {
    return(
        <section
  id="tab-wizard-p-0"
  role="tabpanel"
  aria-labelledby="tab-wizard-h-0"
  className="body current"
  aria-hidden="false"
>
  <br />
  <div className=" col-12">
    <div className="row align-items-center">
      <div className="col-xl-4 hidden-lg-down">
        <div style={{ maxWidth: 800 }}>
        <dotlottie-player
  src="https://lottie.host/0f2c3fae-41b7-401a-92e3-c255a694be86/XaZbHQVHLA.json"
  background="transparent"
  speed={1}
  style={{ width: 400, height: 400 }}
  loop=""
  autoPlay=""
/>

        </div>
      </div>
      <div className="col-xl-8 col-lg-12">
        <div className="m-l-20">
          
          <br />
          <div className="form-group row">
            <label
              className="col-3 text-right control-label col-form-label"
              htmlFor="PlanTemplate_Name"
            >
              Name
            </label>
            <div className="col-9">
              <input
                className="form-control"
                id="input_planName"
                name="PlanTemplate.Name"
                style={{ width: 340 }}
                type="text"
                defaultValue=""
              />
              <br />
              <small className="text-muted">
                Required - ex: sales manager quartlery plan
              </small>
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-3 text-right control-label col-form-label"
              htmlFor="PlanTemplate_PeriodType"
            >
              Type
            </label>
            <div className="col-9">
              <select
                className="form-control"
                data-val="true"
                data-val-required="The Type field is required."
                id="select_periodType"
                name="PlanTemplate.PeriodType"
                style={{ width: 340 }}
              >
                <option value={0}>One-Time</option>
                <option selected value={1}>
                  Monthly
                </option>
                <option value={2}>Quarterly</option>
                <option value={3}>Annually</option>
                <option value={4}>Bi-Annually</option>
                <option value={5}>Bi-Weekly</option>
                <option value={6}>Weekly</option>
                <option value={7}>Daily</option>
              </select>
              <br />
              <small id="hint_periodType" className="text-muted">
                An incentive plan with a monthly recurrence
              </small>
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-3 text-right control-label col-form-label"
              htmlFor="PlanTemplate_Access"
            >
              Visibility
            </label>
            <div className="col-9">
              <select
                className="form-control"
                data-val="true"
                data-val-required="The Visibility field is required."
                id="select_access"
                name="PlanTemplate.Access"
                style={{ width: 340 }}
              >
                <option selected value={0}>
                  Public - Full &amp; Limited Admins
                </option>
                <option value={1}>Hidden - Specific Admins Only</option>
              </select>
              ` <br />
              <small id="hint_access" className="text-muted">
                Visible to all workspace full and limited admins
              </small>
            </div>
          </div>
          <div className="form-group row">
            <label
              className="col-3 text-right control-label col-form-label"
              htmlFor="Industry"
            >
              Your Industry
            </label>
            <div className="col-9">
              <select
                className="form-control"
                id="select_industry"
                name="Industry"
                style={{ width: 340 }}
              >
                <option
                  selected
                  value="Select industry (optional)..."
                >
                  Select industry (optional)...
                </option>
                <option value="Airlines/Aviation">Airlines/Aviation</option>
                <option value="Alternative Dispute Resolution">
                  Alternative Dispute Resolution
                </option>
                <option value="Alternative Medicine">
                  Alternative Medicine
                </option>
                <option value="Animation">Animation</option>
                <option value="Apparel/Fashion">Apparel/Fashion</option>
                <option value="Architecture/Planning">
                  Architecture/Planning
                </option>
                <option value="Arts/Crafts">Arts/Crafts</option>
                <option value="Automotive">Automotive</option>
                <option value="Aviation/Aerospace">Aviation/Aerospace</option>
                <option value="Banking/Mortgage">Banking/Mortgage</option>
                <option value="Biotechnology/Greentech">
                  Biotechnology/Greentech
                </option>
                <option value="Broadcast Media">Broadcast Media</option>
                <option value="Building Materials">Building Materials</option>
                <option value="Business Supplies/Equipment">
                  Business Supplies/Equipment
                </option>
                <option value="Capital Markets/Hedge Fund/Private Equity">
                  Capital Markets/Hedge Fund/Private Equity
                </option>
                <option value="Chemicals">Chemicals</option>
                <option value="Civic/Social Organization">
                  Civic/Social Organization
                </option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Commercial Real Estate">
                  Commercial Real Estate
                </option>
                <option value="Computer Games">Computer Games</option>
                <option value="Computer Hardware">Computer Hardware</option>
                <option value="Computer Networking">Computer Networking</option>
                <option value="Computer Software/Engineering">
                  Computer Software/Engineering
                </option>
                <option value="Computer/Network Security">
                  Computer/Network Security
                </option>
                <option value="Construction">Construction</option>
                <option value="Consumer Electronics">
                  Consumer Electronics
                </option>
                <option value="Consumer Goods">Consumer Goods</option>
                <option value="Consumer Services">Consumer Services</option>
                <option value="Cosmetics">Cosmetics</option>
                <option value="Dairy">Dairy</option>
                <option value="Defense/Space">Defense/Space</option>
                <option value="Design">Design</option>
                <option value="E-Learning">E-Learning</option>
                <option value="Education Management">
                  Education Management
                </option>
                <option value="Electrical/Electronic Manufacturing">
                  Electrical/Electronic Manufacturing
                </option>
                <option value="Entertainment/Movie Production">
                  Entertainment/Movie Production
                </option>
                <option value="Environmental Services">
                  Environmental Services
                </option>
                <option value="Events Services">Events Services</option>
                <option value="Executive Office">Executive Office</option>
                <option value="Facilities Services">Facilities Services</option>
                <option value="Farming">Farming</option>
                <option value="Financial Services">Financial Services</option>
                <option value="Fine Art">Fine Art</option>
                <option value="Fishery">Fishery</option>
                <option value="Food Production">Food Production</option>
                <option value="Food/Beverages">Food/Beverages</option>
                <option value="Fundraising">Fundraising</option>
                <option value="Furniture">Furniture</option>
                <option value="Gambling/Casinos">Gambling/Casinos</option>
                <option value="Glass/Ceramics/Concrete">
                  Glass/Ceramics/Concrete
                </option>
                <option value="Government Administration">
                  Government Administration
                </option>
                <option value="Government Relations">
                  Government Relations
                </option>
                <option value="Graphic Design/Web Design">
                  Graphic Design/Web Design
                </option>
                <option value="Health/Fitness">Health/Fitness</option>
                <option value="Higher Education/Acadamia">
                  Higher Education/Acadamia
                </option>
                <option value="Hospital/Health Care">
                  Hospital/Health Care
                </option>
                <option value="Hospitality">Hospitality</option>
                <option value="Human Resources/HR">Human Resources/HR</option>
                <option value="Import/Export">Import/Export</option>
                <option value="Individual/Family Services">
                  Individual/Family Services
                </option>
                <option value="Industrial Automation">
                  Industrial Automation
                </option>
                <option value="Information Services">
                  Information Services
                </option>
                <option value="Information Technology/IT">
                  Information Technology/IT
                </option>
                <option value="Insurance">Insurance</option>
                <option value="International Affairs">
                  International Affairs
                </option>
                <option value="International Trade/Development">
                  International Trade/Development
                </option>
                <option value="Internet">Internet</option>
                <option value="Investment Banking/Venture">
                  Investment Banking/Venture
                </option>
                <option value="Investment Management/Hedge Fund/Private Equity">
                  Investment Management/Hedge Fund/Private Equity
                </option>
                <option value="Judiciary">Judiciary</option>
                <option value="Law Enforcement">Law Enforcement</option>
                <option value="Law Practice/Law Firms">
                  Law Practice/Law Firms
                </option>
                <option value="Legal Services">Legal Services</option>
                <option value="Legislative Office">Legislative Office</option>
                <option value="Leisure/Travel">Leisure/Travel</option>
                <option value="Library">Library</option>
                <option value="Logistics/Procurement">
                  Logistics/Procurement
                </option>
                <option value="Luxury Goods/Jewelry">
                  Luxury Goods/Jewelry
                </option>
                <option value="Machinery">Machinery</option>
                <option value="Management Consulting">
                  Management Consulting
                </option>
                <option value="Maritime">Maritime</option>
                <option value="Market Research">Market Research</option>
                <option value="Marketing/Advertising/Sales">
                  Marketing/Advertising/Sales
                </option>
                <option value="Mechanical or Industrial Engineering">
                  Mechanical or Industrial Engineering
                </option>
                <option value="Media Production">Media Production</option>
                <option value="Medical Equipment">Medical Equipment</option>
                <option value="Medical Practice">Medical Practice</option>
                <option value="Mental Health Care">Mental Health Care</option>
                <option value="Military Industry">Military Industry</option>
                <option value="Mining/Metals">Mining/Metals</option>
                <option value="Motion Pictures/Film">
                  Motion Pictures/Film
                </option>
                <option value="Museums/Institutions">
                  Museums/Institutions
                </option>
                <option value="Music">Music</option>
                <option value="Nanotechnology">Nanotechnology</option>
                <option value="Newspapers/Journalism">
                  Newspapers/Journalism
                </option>
                <option value="Non-Profit/Volunteering">
                  Non-Profit/Volunteering
                </option>
                <option value="Oil/Energy/Solar/Greentech">
                  Oil/Energy/Solar/Greentech
                </option>
                <option value="Online Publishing">Online Publishing</option>
                <option value="Other Industry">Other Industry</option>
                <option value="Outsourcing/Offshoring">
                  Outsourcing/Offshoring
                </option>
                <option value="Package/Freight Delivery">
                  Package/Freight Delivery
                </option>
                <option value="Packaging/Containers">
                  Packaging/Containers
                </option>
                <option value="Paper/Forest Products">
                  Paper/Forest Products
                </option>
                <option value="Performing Arts">Performing Arts</option>
                <option value="Pharmaceuticals">Pharmaceuticals</option>
                <option value="Philanthropy">Philanthropy</option>
                <option value="Photography">Photography</option>
                <option value="Plastics">Plastics</option>
                <option value="Political Organization">
                  Political Organization
                </option>
                <option value="Primary/Secondary Education">
                  Primary/Secondary Education
                </option>
                <option value="Printing">Printing</option>
                <option value="Professional Training">
                  Professional Training
                </option>
                <option value="Program Development">Program Development</option>
                <option value="Public Relations/PR">Public Relations/PR</option>
                <option value="Public Safety">Public Safety</option>
                <option value="Publishing Industry">Publishing Industry</option>
                <option value="Railroad Manufacture">
                  Railroad Manufacture
                </option>
                <option value="Ranching">Ranching</option>
                <option value="Real Estate/Mortgage">
                  Real Estate/Mortgage
                </option>
                <option value="Recreational Facilities/Services">
                  Recreational Facilities/Services
                </option>
                <option value="Religious Institutions">
                  Religious Institutions
                </option>
                <option value="Renewables/Environment">
                  Renewables/Environment
                </option>
                <option value="Research Industry">Research Industry</option>
                <option value="Restaurants">Restaurants</option>
                <option value="Retail Industry">Retail Industry</option>
                <option value="Security/Investigations">
                  Security/Investigations
                </option>
                <option value="Semiconductors">Semiconductors</option>
                <option value="Shipbuilding">Shipbuilding</option>
                <option value="Sporting Goods">Sporting Goods</option>
                <option value="Sports">Sports</option>
                <option value="Staffing/Recruiting">Staffing/Recruiting</option>
                <option value="Supermarkets">Supermarkets</option>
                <option value="Telecommunications">Telecommunications</option>
                <option value="Textiles">Textiles</option>
                <option value="Think Tanks">Think Tanks</option>
                <option value="Tobacco">Tobacco</option>
                <option value="Translation/Localization">
                  Translation/Localization
                </option>
                <option value="Transportation">Transportation</option>
                <option value="Utilities">Utilities</option>
                <option value="Venture Capital/VC">Venture Capital/VC</option>
                <option value="Veterinary">Veterinary</option>
                <option value="Warehousing">Warehousing</option>
                <option value="Wholesale">Wholesale</option>
                <option value="Wine/Spirits">Wine/Spirits</option>
                <option value="Wireless">Wireless</option>
                <option value="Writing/Editing">Writing/Editing</option>
              </select>
              <br />
              <small className="text-muted">
                Select one for comparative benchmarking
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
</section>

    )
}
export default Step1Component;