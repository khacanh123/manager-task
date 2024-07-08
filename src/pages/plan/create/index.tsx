
import Step1Component from '@/components/CreatePlan/Step1';
import Step2Component from '@/components/CreatePlan/Step2';
import Step3Component from '@/components/CreatePlan/Step3';
import Step4Component from '@/components/CreatePlan/Step4';
import Step5Component from '@/components/CreatePlan/Step5';
import Step6Component from '@/components/CreatePlan/Step6';
import Step7Component from '@/components/CreatePlan/Step7';
import Step8Component from '@/components/CreatePlan/Step8';
import { useEffect, useState } from 'react';

const createUser = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const step = 7;
    const title = ['Intro', 'Scope', 'Targets', 'Metric', 'Measure', 'Incentives', 'Summary']
    const switchStep = (step: number) => {
        switch(step) {
            case 0:
                return <Step1Component />
            case 1:
                return <Step2Component />
            // case 1:
            //     return <Step3Component />
            case 2:
                return <Step4Component />
            case 3:
                return <Step5Component />
            case 4:
                return <Step6Component />
            case 5:
                return <Step7Component />
            case 6:
                return <Step8Component />
        }
    }
    useEffect(() => {
        import('@dotlottie/player-component'); // Dynamically import the component
      }, []);
    return (
        <div className="card">
  <div className="card-body wizard-content">
  <div>
  <h4 className="card-title">
    <span className="lstick" />
    Add Plan
  </h4>
  <h6 className="card-subtitle">
    Use this wizard to create a new sales incentive plan.
  </h6>
</div>
    <div className="tab-wizard wizard-circle wizard clearfix">
      <div className="steps clearfix">
        <ul role='tablist'>
            {
                Array.from({length: step}).map((value: any, index: number) => {
                    return (
                     <li
            role="tab"
            className={`${currentStep == 0 && 'first'} ${currentStep == 4 && 'last'} ${index < currentStep && 'done'} ${currentStep == index && 'current'}`}
            aria-disabled="false"
            aria-selected="false"
          >
            <a
              id="tab-wizard-t-0"
              href="#tab-wizard-h-0"
              aria-controls="tab-wizard-p-0"
            >
            {
                currentStep == index && (
              <span className="current-info audible">current step: </span>
                
                )
            }
              <span className="step">{index+1}</span> {title[index]}{" "}
            </a>
          </li>
                    )
                })
            }
        </ul>
      
      </div>
      <div className="content clearfix">
        {switchStep(currentStep)}
      </div>
      <div className="actions clearfix">
        <button type="button" className="btn btn-secondary pull-left">
          Cancel
        </button>
        <ul role="menu" aria-label="Pagination">
          <li className={`${currentStep == 0 ? 'hide' : ''}`} aria-disabled="false" onClick={() => setCurrentStep((pre) => pre - 1)}>
            <a href="#previous" role="menuitem">
              Previous
            </a>
          </li>
          <li
            aria-hidden="true"
            aria-disabled="true"
            className={`${currentStep > 5 ? 'hide' : ''}`}
            onClick={() => setCurrentStep((pre) => pre + 1)}
          >
            <a href="#next" role="menuitem">
              Next
            </a>
          </li>
          <li aria-hidden="false" style={{}} className={`${currentStep < 6 ? 'hide' : ''}`}>
            <a href="#finish" role="menuitem">
              Create Draft
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

    )
}
export default createUser;