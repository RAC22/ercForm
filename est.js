const est = document.getElementById('ercEst')

function calcEst (elem) {
    const stored = {...localStorage}
    console.log(stored)
    const perQuarter = stored['2021 avg # Employees'] * 3850
    let quarters = 0
    if(stored['revenue_qualifier_q1'] == 'true' || stored['supply_chain_disruption_Q1_2021'] == 'true' || stored['suspension_Q1_2021'] == 'true'){quarters++}
    if(stored['revenue_qualifier_q2'] == 'true' || stored['supply_chain_disruption_Q2_2021'] == 'true' || stored['suspension_Q2_2021'] == 'true'){quarters++}
    if(stored['revenue_qualifier_q3'] == 'true' || stored['supply_chain_disruption_Q3_2021'] == 'true' || stored['suspension_Q3_2021'] == 'true'){quarters++}
    const estimate = perQuarter * quarters
    elem.innerHTML = `$${estimate}`
    localStorage.setItem('Estimate', `$${estimate}`)
}
calcEst(est)