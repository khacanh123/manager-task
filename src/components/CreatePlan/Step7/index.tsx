import { useState } from "react";

const Step7Component = () => {
    const [listAttainment, setListAttainment] = useState<any[]>([{
        condition: 0,
        reward: 0,
        reporting: 2
    }])
    const [addReward, setAddReward] = useState(false);
    const updateItem = (index: number, field: string, value: string) => {
        setListAttainment(prevState => {
            const newState = [...prevState];
            newState[index] = {
                ...newState[index],
                [field]: value
            };
            return newState;
        });
    };
    return (
        <>
            <div className="body">
                <div className="container-fluid content-row">
                    <div className="row">
                        <div className="card-body">
                            <table cellPadding={10} style={{ width: "100%" }}>
                                <tbody>
                                    <tr>

                                        <td width="50%">
                                            <div style={{ maxWidth: 900 }}>
                                                <h2 className="m-b-5">Attainment Levels</h2>
                                                Define performance attainment levels and associated potential rewards.
                                                We'll convert all values to your workspace's{" "}
                                                <a
                                                    href="/app/Settings/Currency/173dac8d-2c4a-11ef-8ee7-002248475315"
                                                    target="_blank"
                                                >
                                                    default currency
                                                </a>
                                                .
                                                <div
                                                    className="measureControl rawControl"
                                                    style={{ display: "inline" }}
                                                >
                                                    I will specify attainment thresholds
                                                    <br />
                                                    <select
                                                        className="form-control m-t-10"
                                                        data-val="true"
                                                        data-val-required="The PlanThresholdMode field is required."
                                                        id="select_planThresholdMode"
                                                        name="PlanTemplate.PlanDescriptor.Incentives.PlanThresholdOptions.PlanThresholdMode"
                                                        style={{ width: 175 }}
                                                    >
                                                        <option selected value={0}>
                                                            As Fixed Values Specified Below
                                                        </option>
                                                        <option value={1}>As Percentages Of a Fixed Quota</option>
                                                        <option value={2}>
                                                            As Percentages Of a Per-Target Dynamic Quota
                                                        </option>
                                                        <option value={3}>
                                                            As Percentages Of a Per-Plan Dynamic Quota
                                                        </option>
                                                        <option value={4}>
                                                            As Percentages Of a Dynamic Quota Formula
                                                        </option>
                                                        <option value={5}>As Per-Target Fixed Values</option>
                                                    </select>
                                                    <input
                                                        className="planThresholdPercentFixedValue m-l-5 form-control m-t-10"
                                                        data-val="true"
                                                        data-val-number="The field PercentFixedValue must be a number."
                                                        data-val-required="The PercentFixedValue field is required."
                                                        id="input_planThresholdPercentFixedValue"
                                                        name="PlanTemplate.PlanDescriptor.Incentives.PlanThresholdOptions.PercentFixedValue"
                                                        placeholder="Quota"
                                                        style={{ width: 140, display: "none" }}
                                                        type="number"
                                                        defaultValue={0}
                                                    />
                                                    <input
                                                        className="planThresholdPercentPerUserValue m-l-5 form-control m-t-10"
                                                        id="input_planThresholdPercentPerTargetValue"
                                                        name="PlanTemplate.PlanDescriptor.Incentives.PlanThresholdOptions.PercentPerTargetValue"
                                                        placeholder="@@CustomVar"
                                                        style={{ width: 170, display: "none" }}
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                    <div>
                                                        <small className="text-muted">
                                                            &nbsp;&nbsp;Watch a{" "}
                                                            <a href="https://youtu.be/ISxNsCqRQYw" target="_blank">
                                                                video
                                                            </a>{" "}
                                                            or get{" "}
                                                            <a
                                                                href="https://support2.salescookie.com/portal/en/kb/articles/kb-how-do-i-set-attainment-levels-and-their-thresholds"
                                                                target="_blank"
                                                            >
                                                                help
                                                            </a>
                                                        </small>
                                                    </div>
                                                    <div
                                                        className="thresholdFormula m-t-10"
                                                        style={{ display: "none" }}
                                                    >
                                                        <div
                                                            className="m-l-10"
                                                            style={{ borderLeft: "4px solid #03A9F4" }}
                                                        >
                                                            <div className="thresholdFormulaContainer m-l-20">
                                                                <textarea
                                                                    className="m-t-10 m-b-5 form-control"
                                                                    cols={20}
                                                                    id="input_thresholdFormula"
                                                                    name="PlanTemplate.PlanDescriptor.Incentives.PlanThresholdOptions.PlanTresholdFormula"
                                                                    placeholder="IIF([Calculation].[start_date] < #2019-01-01#, ..., ...)"
                                                                    rows={5}
                                                                    style={{ display: "none" }}
                                                                    defaultValue={""}
                                                                />
                                                                <div className="CodeMirror cm-s-default CodeMirror-wrap CodeMirror-empty">
                                                                    <div
                                                                        style={{
                                                                            overflow: "hidden",
                                                                            position: "relative",
                                                                            width: 3,
                                                                            height: 0
                                                                        }}
                                                                    >
                                                                        <textarea
                                                                            autoCorrect="off"
                                                                            autoCapitalize="off"
                                                                            spellCheck="false"
                                                                            tabIndex={0}
                                                                            style={{
                                                                                position: "absolute",
                                                                                bottom: "-1em",
                                                                                padding: 0,
                                                                                width: 1000,
                                                                                height: "1em",
                                                                                outline: "none"
                                                                            }}
                                                                            defaultValue={""}
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        className="CodeMirror-vscrollbar"
                                                                        tabIndex={-1}
                                                                        cm-not-content="true"
                                                                    >
                                                                        <div style={{ minWidth: 1 }} />
                                                                    </div>
                                                                    <div
                                                                        className="CodeMirror-hscrollbar"
                                                                        tabIndex={-1}
                                                                        cm-not-content="true"
                                                                    >
                                                                        <div style={{ height: "100%", minHeight: 1 }} />
                                                                    </div>
                                                                    <div
                                                                        className="CodeMirror-scrollbar-filler"
                                                                        cm-not-content="true"
                                                                    />
                                                                    <div
                                                                        className="CodeMirror-gutter-filler"
                                                                        cm-not-content="true"
                                                                    />
                                                                    <div className="CodeMirror-scroll" tabIndex={-1}>
                                                                        <div
                                                                            className="CodeMirror-sizer"
                                                                            style={{ marginLeft: 0 }}
                                                                        >
                                                                            <div style={{ position: "relative" }}>
                                                                                <div className="CodeMirror-lines" role="presentation">
                                                                                    <div
                                                                                        role="presentation"
                                                                                        style={{ position: "relative", outline: "none" }}
                                                                                    >
                                                                                        <pre
                                                                                            className="CodeMirror-placeholder CodeMirror-line-like"
                                                                                            style={{
                                                                                                height: 0,
                                                                                                overflow: "visible",
                                                                                                direction: "ltr"
                                                                                            }}
                                                                                        >
                                                                                            IIF([Calculation].[start_date] &lt;
                                                                                            #2019-01-01#, ..., ...)
                                                                                        </pre>
                                                                                        <div className="CodeMirror-measure">
                                                                                            <pre className="CodeMirror-line-like">
                                                                                                <span>xxxxxxxxxx</span>
                                                                                            </pre>
                                                                                            <div className="CodeMirror-linenumber CodeMirror-gutter-elt">
                                                                                                <div>1</div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="CodeMirror-measure" />
                                                                                        <div
                                                                                            style={{ position: "relative", zIndex: 1 }}
                                                                                        />
                                                                                        <div className="CodeMirror-cursors" />
                                                                                        <div
                                                                                            className="CodeMirror-code"
                                                                                            role="presentation"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            style={{ position: "absolute", height: 30, width: 1 }}
                                                                        />
                                                                        <div className="CodeMirror-gutters">
                                                                            <div
                                                                                className="CodeMirror-gutter CodeMirror-linenumbers"
                                                                                style={{ width: 1 }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <small
                                                            className="text-muted"
                                                            style={{ position: "relative", top: 5, marginLeft: 35 }}
                                                        >
                                                            Click{" "}
                                                            <a
                                                                className="thresholdFormulaFullScreen"
                                                                href="javascript:void(0)"
                                                            >
                                                                here
                                                            </a>{" "}
                                                            to enter full screen mode and{" "}
                                                            <a
                                                                href="https://support2.salescookie.com/portal/en/kb/articles/kb-how-can-i-specify-a-dynamic-quota-formula-advanced"
                                                                target="_blank"
                                                            >
                                                                here
                                                            </a>{" "}
                                                            for help
                                                        </small>
                                                        <br />
                                                        <input
                                                            className="planThresholdUseThresholdFormulas chk-col-light-blue"
                                                            data-val="true"
                                                            data-val-required="The Also Use Formulas To Define Tiers field is required."
                                                            id="PlanTemplate_PlanDescriptor_Incentives_PlanThresholdOptions_UseThresholdFormulas"
                                                            name="PlanTemplate.PlanDescriptor.Incentives.PlanThresholdOptions.UseThresholdFormulas"
                                                            type="checkbox"
                                                            defaultValue="true"
                                                        />
                                                        <label
                                                            className="text-muted m-t-10"
                                                            htmlFor="PlanTemplate_PlanDescriptor_Incentives_PlanThresholdOptions_UseThresholdFormulas"
                                                            style={{ fontSize: 13 }}
                                                        >
                                                            Also Use Formulas To Define Tiers
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td width="50%" valign="top">
                                            <button type="button" className="levelAdd btn btn-info m-t-20 m-l-20" onClick={() => setListAttainment([...listAttainment, {
                                                condition: 0,
                                                reward: 0,
                                                reporting: 2
                                            }])}>
                                                <i className="fa fa-plus" />
                                                &nbsp;&nbsp;Attainment Level
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <table
                            id="table_rewards"
                            className="table table-hover m-t-10"
                            style={{ width: "100%" }}
                        >
                            <thead>
                                <tr>
                                    <td className="p-l-0">
                                        <span
                                            data-toggle="tooltip"
                                            data-original-title="Click to sort attainment levels."
                                        >
                                            <button
                                                type="button"
                                                className="btn btn-xs levelSort fa fa-sort-amount-desc"
                                                style={{ color: "#909090" }}
                                            />
                                        </span>
                                    </td>
                                    <td colSpan={2}>
                                        <b>Condition</b>
                                    </td>
                                    <td colSpan={2}>
                                        <span className="m-l-5">
                                            <b>Rewards</b>
                                        </span>
                                    </td>
                                    <td colSpan={3}>
                                        <b>Settings</b>
                                    </td>
                                </tr>
                            </thead>
                            <tbody id="levelBody">
                                {
                                    listAttainment.map((item: any, index: number) => (
                                        <tr className="m-b-5 levelRow">
                                            <td width={1} className="align-middle p-0">
                                                <div className="nowrap">
                                                    <span
                                                        data-toggle="tooltip"
                                                        data-original-title="This label is set automatically as you set thresholds."
                                                    >
                                                        <span
                                                            className="levelLabel label label-rounded m-0"
                                                            style={{ backgroundColor: "#eeeeee", color: "black" }}
                                                        >
                                                            L1
                                                        </span>
                                                    </span>
                                                </div>
                                            </td>
                                            <td width={1} className="align-middle">
                                                <div style={{ whiteSpace: "nowrap" }}>
                                                    <span className="m-r-5" style={{ fontWeight: 800, fontSize: 16 }}>
                                                        When
                                                    </span>
                                                    <span
                                                        className="metricNameLabel label label-info label-rounded"
                                                        style={{
                                                            position: "relative",
                                                            top: "-2px",
                                                            fontSize: 14,
                                                            padding: 12
                                                        }}
                                                    >
                                                        <span className="scopeNameUpper">Individual</span>&nbsp;
                                                        <span className="metricNameUpper">Revenue</span>&nbsp;
                                                        <span className="measureNameUpper">Total</span>
                                                    </span>
                                                    <span
                                                        className="levelComparer"
                                                        style={{ fontWeight: 800, fontSize: 16 }}
                                                    >
                                                        &gt;=
                                                    </span>
                                                    <input
                                                        type="number"
                                                        step="0.01"
                                                        className="levelThreshold form-control m-l-5"
                                                        style={{ width: 120 }}
                                                        onChange={(e) => updateItem(index, item.condition, e.target.value)}
                                                    />
                                                    <input
                                                        type="text"
                                                        className="levelThresholdVariable form-control m-l-5"
                                                        style={{ width: 120, display: "none" }}
                                                        placeholder="@@CustomVar"
                                                    />
                                                    <span
                                                        className="levelPercent"
                                                        style={{ fontWeight: 800, fontSize: 16, display: "none" }}
                                                    >
                                                        %
                                                    </span>
                                                    <div
                                                        className="levelThresholdFormulaContainer"
                                                        style={{ display: "none" }}
                                                    >
                                                        <textarea
                                                            className="levelThresholdFormula"
                                                            rows={3}
                                                            spellCheck="false"
                                                            placeholder="[initial_value]"
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td width={1} className="align-middle">
                                                <span style={{ fontSize: 20 }}>
                                                    <i className="fa fa-arrow-circle-right m-l-10" />
                                                </span>
                                            </td>
                                            <td width={1} className="align-middle">
                                                <div
                                                    className="m-l-5"
                                                    style={{
                                                        borderLeft: "4px solid black",
                                                        minHeight: 40,
                                                        display: "flex",
                                                        alignItems: "center"
                                                    }}
                                                >
                                                    <div className="levelRewards m-l-10">
                                                        <span
                                                            className="levelReward label label-rounded nowrap m-b-5 m-t-5 label-danger"
                                                            style={{ fontSize: 12, padding: 8, cursor: "pointer" }}
                                                        //   rewarddata='{"MenuTitle":"None","MenuSubTitle":"No rewards granted at this level","IconName":"icon-close","BClass":"label-danger","Id":"c4977e50-793b-42b2-bf08-2ac63853872a","RewardType":"NoReward","IsCollective":false,"Description":null,"Explanation":null,"RewardUserCollective":0,"RewardUserNumeric":0,"RewardTeamCollective":0,"RewardTeamNumeric":0,"SpecificBeneficiaryId":null,"IsRecoverable":false,"IsNonDeductible":false,"IsEstimated":false,"IsPerTransaction":false,"IsNoSplit":false,"IsPayOnce":false,"ConditionFormula":null}'
                                                        >
                                                            <i className="levelRewardIcon icon-close" />
                                                            &nbsp;&nbsp;<span className="levelRewardTitle">None</span>
                                                        </span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="levelRewardAdd btn btn-info btn-sm m-l-10"
                                                        onClick={() => setAddReward((o) => !o)}
                                                    >
                                                        <i className="fa fa-plus" />
                                                        &nbsp;&nbsp;Reward
                                                    </button>
                                                </div>
                                            </td>
                                            <td style={{ width: 10 }} />
                                            <td>
                                                <select
                                                    className="levelCumulative form-control m-t-10"
                                                    data-val="true"
                                                    data-val-required="The TemplateCumulativeRewards field is required."
                                                    id="TemplateCumulativeRewards"
                                                    name="TemplateCumulativeRewards"
                                                    style={{ width: 180, fontSize: 12 }}
                                                    value={item.reward}
                                                    onChange={(e) => updateItem(index, item.reward, e.target.value)}
                                                >
                                                    <option value={0}>
                                                        Non-Cumulative - Do Not Grant Rewards At Lower Attainment Levels
                                                    </option>
                                                    <option value={1}>
                                                        Cumulative - Also Grant Rewards At Lower Attainment Levels
                                                    </option>
                                                </select>
                                                <br />
                                                <small className="text-muted">Grant rewards at lower levels?</small>
                                            </td>
                                            <td>
                                                <select
                                                    className="levelDifficulty form-control m-t-10"
                                                    data-val="true"
                                                    data-val-required="The TemplateAttainmentDifficulty field is required."
                                                    id="TemplateAttainmentDifficulty"
                                                    name="TemplateAttainmentDifficulty"
                                                    style={{ width: 180, fontSize: 12 }}
                                                    value={item.reporting}
                                                    onChange={(e) => updateItem(index, item.reporting, e.target.value)}
                                                >
                                                    <option value={0}>
                                                        Trivial
                                                    </option>
                                                    <option value={1}>Easy</option>
                                                    <option value={2}>Standard</option>
                                                    <option value={3}>Difficult</option>
                                                    <option value={4}>Outstanding</option>
                                                </select>
                                                <br />
                                                <small className="text-muted">Used for attainment reporting</small>
                                            </td>
                                            <td align="right" className="align-top" style={{ width: "100%" }}>
                                                <button
                                                    type="button"
                                                    className="levelDelete btn btn-danger m-t-10 m-l-10 m-b-10"
                                                    onClick={() => setListAttainment(listAttainment.splice(index, 1))}
                                                >
                                                    <i className="fa fa-close" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
            <div className="bg-position" style={{display: addReward ? 'block': 'none'}} 
                                                        onClick={() => setAddReward((o) => !o)}
            
            >
                <div className="container-fluid" style={{ width: '80%', margin: 'auto', marginTop: 25}}>
                    <div className="row">
                        <div
                            className="planRewardCard card m-b-20 m-r-30"
                            style={{
                                border: "1px solid silver",
                                minWidth: 300,
                                maxWidth: 300,
                                opacity: 1
                            }}
                            onClick={(e) => {
                            e.stopPropagation();
                            // setAddReward(true)
                            }}
                        >
                            <div className="card-body" style={{ minHeight: 160 }}>
                                <div>
                                    <span className="m-b-10" style={{ fontSize: 20, fontWeight: 600 }}>
                                        None
                                    </span>
                                    <br />
                                    <br />
                                    <div
                                        className="pull-left m-l-10 m-r-20 align-middle"
                                        style={{ fontSize: 40 }}
                                    >
                                        <i className="icon-close" />
                                    </div>
                                    <p className="card-text align-bottom">No rewards granted at this level</p>
                                </div>
                                <br className="clear" />
                            </div>
                            <button
                                type="button"
                                className="btn btn-info m-l-20 m-b-20"
                                style={{ width: 100 }}
                            >
                                <i className="icon-arrow-right-circle" />
                                &nbsp;&nbsp;Select
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>



    )
}
export default Step7Component;