const est = document.getElementById('ercEst')

function calcEst (elem) {
    const stored = {...localStorage}
    let estimate = 0
    let perQuarter = 0
    if(stored['2021 avg # Employees']){
        perQuarter = stored['2021 avg # Employees'] * 7000
    }
    let quarters = 0
    if(stored['revenue_qualifier_q1'] == 'true' || stored['supply_chain_disruption_Q1_2021'] == 'true' || stored['suspension_Q1_2021'] == 'true'){quarters++}
    if(stored['revenue_qualifier_q2'] == 'true' || stored['supply_chain_disruption_Q2_2021'] == 'true' || stored['suspension_Q2_2021'] == 'true'){quarters++}
    if(stored['revenue_qualifier_q3'] == 'true' || stored['supply_chain_disruption_Q3_2021'] == 'true' || stored['suspension_Q3_2021'] == 'true'){quarters++}
    if(stored['2020 avg # Employees']){
        estimate = (perQuarter * quarters) + (stored['2020 avg # Employees'] * 5000)
    }else{
        estimate = perQuarter * quarters
    }
    elem.innerHTML = `$${estimate}`
    localStorage.setItem('Estimate', `$${estimate}`)
}
if(est){
    calcEst(est)
}

function buildResults () {
    const container = document.getElementById('pepared-forms')
    const stored = {...localStorage}
    const order = ['Company','First name','Last name','Email','Phone#','Estimate','2021 avg # Employees','2020 avg # Employees','w2_wages_paid','government_entity','started_before_feb_2020','over_million_gross_receipts','fte_2019','had_revenue_reduction','revenue_qualifier_q1','revenue_qualifier_q2','revenue_qualifier_q3','supply_chain_disruption','supply_chain_disruption_Q1_2021','supply_chain_disruption_Q2_2021','supply_chain_disruption_Q3_2021','not_able_reasonable_replacement_supplier','suspension','suspension_Q1_2021','suspension_Q2_2021','suspension_Q3_2021']
    for (const idx in order){
        const key = order[idx]
        if(stored[key]){
            const newElem = document.createElement('input')
            newElem.setAttribute('name', key)
            newElem.setAttribute('value', stored[key])
            container.appendChild(newElem)
        }
    }
}
buildResults();