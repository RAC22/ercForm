const bigMoney = document.getElementById("total-estimate");
const numInput2020 = document.getElementById("2020count");
const numInput2021 = document.getElementById("2021count");
const inputs = document.getElementsByTagName("input");
const warn1 = document.getElementById(
	"average_fulltime_employees_2020_warning"
);
const warn2 = document.getElementById(
	"average_fulltime_employees_2021_warning"
);

function w2logic() {
	const w2 = localStorage.getItem("w2_wages_paid");
	if (w2 == "true") {
		document.location.href = "./form4.html";
	} else {
		document.location.href = "./sorry.html";
	}
}
function govLogic() {
	const gov = localStorage.getItem("government_entity");
	if (gov == "true") {
		document.location.href = "./sorry.html";
	} else {
		document.location.href = "./form5.html";
	}
}
function bizStartLogic() {
	const startedBefore = localStorage.getItem("started_before_feb_2020");
	if (startedBefore == "true") {
		document.location.href = "./empnum.html";
	} else {
		document.location.href = "./state.html";
	}
}
function fteNumLogic() {
	const fteNum = localStorage.getItem("fte_2019");
	if (fteNum == "OVER_500") {
		document.location.href = "./sorry.html";
	} else {
		document.location.href = "./state.html";
	}
}
function revLogic() {
	const rev = localStorage.getItem("over_million_gross_receipts");
	if (rev == "true") {
		document.location.href = "./qualop.html";
	}
	if (rev === "false") {
		document.location.href = "./startupqual.html";
	}
}
function revReducLogic() {
	document.location.href = "./supply.html";
}
function supplyChainLogic() {
	document.location.href = "./lockdown.html";
}
function lockdownLogic() {
	const lockedDown = localStorage.getItem("suspension");
	const revReduc = localStorage.getItem("had_revenue_reduction");
	const sussy = localStorage.getItem("suspension");
	if (lockedDown == "true" || revReduc == "true" || sussy == "true") {
		//document.location.href = "./qualified.html";
		buildAndSubmit();
	} else {
		document.location.href = "./sorry.html";
	}
}
function changeBigMoney() {
	const num2020 = numInput2020.value;
	const num2021 = numInput2021.value;
	let newBigMoneyVal = 0;
	if (num2020 > 100) {
		warn1.style = "";
	} else {
		warn1.style = "display: none;";
	}
	if (num2021 > 500) {
		warn2.style = "";
	} else {
		warn2.style = "display: none;";
	}
	if (num2020 && num2020 >= 0 && num2020 <= 100) {
		newBigMoneyVal += 5000 * num2020;
	}
	if (num2021 && num2021 >= 0 && num2021 <= 500) {
		newBigMoneyVal += 21000 * num2021;
	}
	bigMoney.innerHTML = `$${newBigMoneyVal.toLocaleString()}`;
}
if (numInput2020 || numInput2021) {
	window.onkeyup = changeBigMoney;
	window.onmouseup = changeBigMoney;
	window.onload = changeBigMoney;
}

const phone_input = document.getElementById("inputPhoneNo");
if (phone_input) {
	phone_input.addEventListener("input", () => {
		phone_input.setCustomValidity("");
		phone_input.checkValidity();
	});

	phone_input.addEventListener("invalid", () => {
		if (phone_input.value === "") {
			phone_input.setCustomValidity("Enter phone number");
		} else {
			phone_input.setCustomValidity(
				"Please enter phone number in this format: 123-456-7890"
			);
		}
	});
}

function persistInput(inputs) {
	for (const idx in inputs) {
		const input = inputs[idx];
		const key = input.name;
		const storedValue = localStorage.getItem(key);

		if (storedValue && input.type != "radio" && input.type != "checkbox") {
			input.value = storedValue;
		}
		if (
			(input.type == "radio" || input.type == "checkbox") &&
			input.value == storedValue
		) {
			input.checked = true;
		}
		input.addEventListener("input", function () {
			if (input.type != "checkbox") {
				localStorage.setItem(key, input.value);
			} else {
				localStorage.setItem(key, input.checked);
			}
		});
	}
}
if (inputs.length) {
	persistInput(inputs);
}

function buildAndSubmit() {
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

	const sub = document.getElementById("submitbtn");
	const form = document.getElementById("mainForm");
	const spinner = document.getElementById("spinner");
	sub.setAttribute("disabled", true);
	spinner.classList.remove("visually-hidden");
	form.submit();
	//window.location.href = `./thankyou.html`;
	//6a0b6bc7da469341ee5a69c12e0193d0
}
