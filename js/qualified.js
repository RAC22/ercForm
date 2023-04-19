const est = document.getElementById("ercEst");

function calcEst(elem) {
	const stored = { ...localStorage };
	let estimate = 0;
	let perQuarter = 0;
	if (stored["2021 avg # Employees"]) {
		perQuarter = stored["2021 avg # Employees"] * 7000;
	}
	let quarters = 0;
	if (
		stored["revenue_qualifier_q1"] == "true" ||
		stored["supply_chain_disruption_Q1_2021"] == "true" ||
		stored["suspension_Q1_2021"] == "true"
	) {
		quarters++;
	}
	if (
		stored["revenue_qualifier_q2"] == "true" ||
		stored["supply_chain_disruption_Q2_2021"] == "true" ||
		stored["suspension_Q2_2021"] == "true"
	) {
		quarters++;
	}
	if (
		stored["revenue_qualifier_q3"] == "true" ||
		stored["supply_chain_disruption_Q3_2021"] == "true" ||
		stored["suspension_Q3_2021"] == "true"
	) {
		quarters++;
	}
	if (stored["2020 avg # Employees"]) {
		estimate = perQuarter * quarters + stored["2020 avg # Employees"] * 5000;
	} else {
		estimate = perQuarter * quarters;
	}
	elem.innerHTML = `$${estimate.toLocaleString()}`;
	localStorage.setItem("Estimate", `$${estimate}`);
}
if (est) {
	calcEst(est);
}

function buildResults() {
	const container = document.getElementById("pepared-forms");
	const stored = { ...localStorage };
	const order = [
		"Company",
		"First name",
		"Last name",
		"Email",
		"Phone#",
		"Estimate",
		"2021 avg # Employees",
		"2020 avg # Employees",
		"w2_wages_paid",
		"government_entity",
		"started_before_feb_2020",
		"over_million_gross_receipts",
		"fte_2019",
		"had_revenue_reduction",
		"revenue_qualifier_q1",
		"revenue_qualifier_q2",
		"revenue_qualifier_q3",
		"supply_chain_disruption",
		"supply_chain_disruption_Q1_2021",
		"supply_chain_disruption_Q2_2021",
		"supply_chain_disruption_Q3_2021",
		"not_able_reasonable_replacement_supplier",
		"suspension",
		"suspension_Q1_2021",
		"suspension_Q2_2021",
		"suspension_Q3_2021",
	];
	for (const idx in order) {
		const key = order[idx];
		if (stored[key]) {
			const newElem = document.createElement("input");
			newElem.setAttribute("name", key);
			newElem.setAttribute("value", stored[key]);
			container.appendChild(newElem);
		}
	}
}
buildResults();
function exportData() {
	const stored = { ...localStorage };
	const container = document.getElementById("pepared-forms");
	let csv = "";
	for (let key in stored) {
		csv += `${key},${stored[key]}\r\n`.replaceAll(" ", "_");
	}
	let blob = new Blob([csv], { type: "text/csv" });
	const file = new File([blob], `${stored["Company"]}.csv`, {
		type: "text/csv",
		lastModified: new Date().getTime(),
	});
	let fileHolder = new DataTransfer();
	fileHolder.items.add(file);
	const newElem = document.createElement("input");
	newElem.setAttribute("type", "file");
	newElem.setAttribute("name", "attachment");
	newElem.setAttribute("accept", "text/csv");
	newElem.files = fileHolder.files;
	container.appendChild(newElem);
}
exportData();

function loading() {
	const sub = document.getElementById("submitbtn");
	//const form = document.getElementById("mainForm");
	const spinner = document.getElementById("spinner");
	sub.setAttribute("disabled", true);
	spinner.classList.remove("visually-hidden");
	//form.submit();
	window.location.href = `./thankyou.html`;
	//6a0b6bc7da469341ee5a69c12e0193d0
}
