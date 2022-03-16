//Change Power Consumption ==========================================
function powerConsumption() {
    let powerCons = document.getElementById('powerCons');
    let powerSelect = document.getElementById('powerSelect').value;
    if (powerSelect === 'kilowatts') {
        powerCons.value = powerCons.value / 1000
    }
    if (powerSelect === 'watts') {
        powerCons.value = powerCons.value * 1000
    }
}

// Calculate values =================================================
function powerConsumed() {
    let powerCons = document.getElementById('powerCons');
    let energyPrice = document.getElementById('energyPrice');
    let powerConsum = document.getElementById('powerConsum');
    let usageTime = document.getElementById('usageTime');
    let cost = document.getElementById('cost');
    let powerSelect = document.getElementById('powerSelect').value;
    let costSelect = document.getElementById('costSelect').value;
    let usageSelect = document.getElementById('usageSelect').value;
    let consumedSelect = document.getElementById('consumedSelect').value;

    // Check Power Consumed value
    switch (consumedSelect) {
        case 'costday':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = usageTime.value * powerCons.value;
                            break;
                        case 'costweek':
                            powerConsum.value = (usageTime.value * powerCons.value) / 7;
                            break;
                        case 'costmonth':
                            powerConsum.value = (usageTime.value * powerCons.value) / 30.4375;
                            break;
                        case 'costyear':
                            powerConsum.value = (usageTime.value * powerCons.value) / 365.25;
                            break;
                        default: console.log('Error')
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = (usageTime.value * powerCons.value) / 1000;
                            break;
                        case 'costweek':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 7) / 1000;
                            break;
                        case 'costmonth':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 30.4375) / 1000;
                            break;
                        case 'costyear':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 365.25) / 1000;
                            break;
                        default: console.log('Error')
                    }
                    break;
                default: console.log('Error')
            };
            break;
        case 'costweek':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = (usageTime.value * powerCons.value) * 7;
                            break;
                        case 'costweek':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 7) * 7;
                            break;
                        case 'costmonth':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 30.4375) * 7;
                            break;
                        case 'costyear':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 365.25) * 7;
                            break;
                        default: console.log('Error')
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 1000) * 7;
                            break;
                        case 'costweek':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 7) / 1000) * 7;
                            break;
                        case 'costmonth':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 30.4375) / 1000) * 7;
                            break;
                        case 'costyear':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 365.25) / 1000) * 7;
                            break;
                        default: console.log('Error')
                    }
                    break;
                default: console.log('Error')
            };
            break;
        case 'costmonth':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = (usageTime.value * powerCons.value) * 30.4375;
                            break;
                        case 'costweek':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 7) * 30.4375;
                            break;
                        case 'costmonth':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 30.4375) * 30.4375;
                            break;
                        case 'costyear':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 365.25) * 30.4375;
                            break;
                        default: console.log('Error')
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 1000) * 30.4375;
                            break;
                        case 'costweek':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 7) / 1000) * 30.4375;
                            break;
                        case 'costmonth':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 30.4375) / 1000) * 30.4375;
                            break;
                        case 'costyear':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 365.25) / 1000) * 30.4375;
                            break;
                        default: console.log('Error')
                    };
                    break;
                default: console.log('Error')
            };
            break;
        case 'costyear':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = (usageTime.value * powerCons.value) * 365.25;
                            break;
                        case 'costweek':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 7) * 365.25;
                            break;
                        case 'costmonth':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 30.4375) * 365.25;
                            break;
                        case 'costyear':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 365.25) * 365.25;
                            break;
                        default: console.log('Error')
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 1000) * 365.25;
                            break;
                        case 'costweek':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 7) / 1000) * 365.25;
                            break;
                        case 'costmonth':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 30.4375) / 1000) * 365.25;
                            break;
                        case 'costyear':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 365.25) / 1000) * 365.25;
                            break;
                        default: console.log('Error')
                    };
                    break;
                default: console.log('Error')
            };
            break;
        default: console.warn('Error Power Consumer')
    }

    // Check Cost value
    switch (costSelect) {
        case 'costday':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = powerCons.value * energyPrice.value * usageTime.value;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = powerCons.value * energyPrice.value * (usageTime.value / 7);
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = powerCons.value * energyPrice.value * (usageTime.value / 30.4375);
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = powerCons.value * energyPrice.value * (usageTime.value / 365.25);
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('Error')
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = (powerCons.value * energyPrice.value * usageTime.value) / 1000;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = (powerCons.value * energyPrice.value * (usageTime.value / 7) / 1000);
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = (powerCons.value * energyPrice.value * (usageTime.value / 30.4375) / 1000);
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = (powerCons.value * energyPrice.value * (usageTime.value / 365.25) / 1000);
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('Error')
                    };
                    break;
                default: console.log('pw error')
            };
            break;
        case 'costweek':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = (powerCons.value * energyPrice.value * usageTime.value) * 7;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = (powerCons.value * energyPrice.value * (usageTime.value / 7)) * 7;
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = (powerCons.value * energyPrice.value * (usageTime.value / 30.4375)) * 7;
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = (powerCons.value * energyPrice.value * (usageTime.value / 365.25)) * 7;
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('qeeqwe')
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = (powerCons.value * energyPrice.value * usageTime.value) / 1000 * 7;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = (powerCons.value * energyPrice.value * (usageTime.value / 7)) / 1000 * 7;
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = (powerCons.value * energyPrice.value * (usageTime.value / 30.4375)) / 1000 * 7;
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = (powerCons.value * energyPrice.value * (usageTime.value / 365.25)) / 1000 * 7;
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('Error')
                    };
                    break;
                default: console.log('pw error')
            };
            break;
        case 'costmonth':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = (powerCons.value * energyPrice.value * usageTime.value) * 30.4375;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = (powerCons.value * energyPrice.value * (usageTime.value / 7)) * 30.4375;
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = (powerCons.value * energyPrice.value * (usageTime.value / 30.4375)) * 30.4375;
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = (powerCons.value * energyPrice.value * (usageTime.value / 365.25)) * 30.4375;
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('qeeqwe');
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = (powerCons.value * energyPrice.value * usageTime.value) / 1000 * 30.4375;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = (powerCons.value * energyPrice.value * (usageTime.value / 7)) / 1000 * 30.4375;
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = (powerCons.value * energyPrice.value * (usageTime.value / 30.4375)) / 1000 * 30.4375;
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = (powerCons.value * energyPrice.value * (usageTime.value / 365.25)) / 1000 * 30.4375;
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('Error');
                    };
                    break;
                default: console.log('month error')
            };
            break;

        case 'costyear':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = (powerCons.value * energyPrice.value * usageTime.value) * 365.25;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = (powerCons.value * energyPrice.value * (usageTime.value / 7)) * 365.25;
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = (powerCons.value * energyPrice.value * (usageTime.value / 30.4375)) * 365.25;
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = (powerCons.value * energyPrice.value * (usageTime.value / 365.25)) * 365.25;
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('qeeqwe');
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = (powerCons.value * energyPrice.value * usageTime.value) / 1000 * 365.25;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = (powerCons.value * energyPrice.value * (usageTime.value / 7)) / 1000 * 365.25;
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = (powerCons.value * energyPrice.value * (usageTime.value / 30.4375)) / 1000 * 365.25;
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = (powerCons.value * energyPrice.value * (usageTime.value / 365.25)) / 1000 * 365.25;
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('Error');
                    };
                    break;
                default: console.log('year error')
            };
            break;

        default: console.log('Err');

    }
}



// Change USAGE_TIME select value =================================================
function changeUsageTime() {
    let usageTime = document.getElementById('usageTime');
    let powerConsum = document.getElementById('powerConsum');
    let consumedSelect = document.getElementById('consumedSelect').value;
    let usageSelect = document.getElementById('usageSelect').value;



    switch (usageSelect) {
        case 'costday':
            switch (consumedSelect) {
                case 'costday':
                    usageTime.value = powerConsum.value;
                    break;
                case 'costweek':
                    usageTime.value = powerConsum.value / 7;
                    break;
                case 'costmonth':
                    usageTime.value = powerConsum.value / 30.4375;
                    break;
                case 'costyear':
                    usageTime.value = powerConsum.value / 365.25;
                    break;
                default: console.log('Error Change usage time')
            }
            break;
        case 'costweek':
            switch (consumedSelect) {
                case 'costday':
                    usageTime.value = powerConsum.value * 7;
                    break;
                case 'costweek':
                    usageTime.value = (powerConsum.value / 7) * 7;
                    break;
                case 'costmonth':
                    usageTime.value = (powerConsum.value / 30.4375) * 7;
                    break;
                case 'costyear':
                    usageTime.value = (powerConsum.value / 365.25) * 7;
                    break;
                default: console.log('Error Change usage time')
            }
            break;
        case 'costmonth':
            switch (consumedSelect) {
                case 'costday':
                    usageTime.value = powerConsum.value * 30.4375;
                    break;
                case 'costweek':
                    usageTime.value = (powerConsum.value / 7) * 30.4375;
                    break;
                case 'costmonth':
                    usageTime.value = (powerConsum.value / 30.4375) * 30.4375;
                    break;
                case 'costyear':
                    usageTime.value = (powerConsum.value / 365.25) * 30.4375;
                    break;
                default: console.log('Error Change usage time')
            }
            break;
        case 'costyear':
            switch (consumedSelect) {
                case 'costday':
                    usageTime.value = powerConsum.value * 365.25;
                    break;
                case 'costweek':
                    usageTime.value = (powerConsum.value / 7) * 365.25;
                    break;
                case 'costmonth':
                    usageTime.value = (powerConsum.value / 30.4375) * 365.25;
                    break;
                case 'costyear':
                    usageTime.value = (powerConsum.value / 365.25) * 365.25;
                    break;
                default: console.log('Error Change usage time')
            }
            break;
        default: console.log('Error Change usage time')
    }
}

// Change Power Consumed select value ===============================
function changeConsumed() {
    let powerCons = document.getElementById('powerCons');
    let powerConsum = document.getElementById('powerConsum');
    let usageTime = document.getElementById('usageTime')
    let powerSelect = document.getElementById('powerSelect').value;
    let consumedSelect = document.getElementById('consumedSelect').value;
    let usageSelect = document.getElementById('usageSelect').value;

    switch (consumedSelect) {
        case 'costday':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = usageTime.value * powerCons.value;
                            break;
                        case 'costweek':
                            powerConsum.value = (usageTime.value * powerCons.value) / 7;
                            break;
                        case 'costmonth':
                            powerConsum.value = (usageTime.value * powerCons.value) / 30.4375;
                            break;
                        case 'costyear':
                            powerConsum.value = (usageTime.value * powerCons.value) / 365.25;
                            break;
                        default: console.log('Error')
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = (usageTime.value * powerCons.value) / 1000;
                            break;
                        case 'costweek':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 7) / 1000;
                            break;
                        case 'costmonth':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 30.4375) / 1000;
                            break;
                        case 'costyear':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 365.25) / 1000;
                            break;
                        default: console.log('Error')
                    }
                    break;
                default: console.log('Error')
            };
            break;
        case 'costweek':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = (usageTime.value * powerCons.value) * 7;
                            break;
                        case 'costweek':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 7) * 7;
                            break;
                        case 'costmonth':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 30.4375) * 7;
                            break;
                        case 'costyear':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 365.25) * 7;
                            break;
                        default: console.log('Error')
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 1000) * 7;
                            break;
                        case 'costweek':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 7) / 1000) * 7;
                            break;
                        case 'costmonth':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 30.4375) / 1000) * 7;
                            break;
                        case 'costyear':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 365.25) / 1000) * 7;
                            break;
                        default: console.log('Error')
                    }
                    break;
                default: console.log('Error')
            };
            break;
        case 'costmonth':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = (usageTime.value * powerCons.value) * 30.4375;
                            break;
                        case 'costweek':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 7) * 30.4375;
                            break;
                        case 'costmonth':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 30.4375) * 30.4375;
                            break;
                        case 'costyear':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 365.25) * 30.4375;
                            break;
                        default: console.log('Error')
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 1000) * 30.4375;
                            break;
                        case 'costweek':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 7) / 1000) * 30.4375;
                            break;
                        case 'costmonth':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 30.4375) / 1000) * 30.4375;
                            break;
                        case 'costyear':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 365.25) / 1000) * 30.4375;
                            break;
                        default: console.log('Error')
                    };
                    break;
                default: console.log('Error')
            };
            break;
        case 'costyear':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = (usageTime.value * powerCons.value) * 365.25;
                            break;
                        case 'costweek':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 7) * 365.25;
                            break;
                        case 'costmonth':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 30.4375) * 365.25;
                            break;
                        case 'costyear':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 365.25) * 365.25;
                            break;
                        default: console.log('Error')
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            powerConsum.value = ((usageTime.value * powerCons.value) / 1000) * 365.25;
                            break;
                        case 'costweek':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 7) / 1000) * 365.25;
                            break;
                        case 'costmonth':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 30.4375) / 1000) * 365.25;
                            break;
                        case 'costyear':
                            powerConsum.value = (((usageTime.value * powerCons.value) / 365.25) / 1000) * 365.25;
                            break;
                        default: console.log('Error')
                    };
                    break;
                default: console.log('Error')
            };
            break;
        default: console.warn('Error Power Consumer')
    }
}

// Change COST select value =========================================
function changeCost() {
    let powerCons = document.getElementById('powerCons');
    let energyPrice = document.getElementById('energyPrice');
    let usageTime = document.getElementById('usageTime')
    let cost = document.getElementById('cost')
    let powerSelect = document.getElementById('powerSelect').value;
    let costSelect = document.getElementById('costSelect').value;
    let usageSelect = document.getElementById('usageSelect').value;

    switch (costSelect) {
        case 'costday':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = powerCons.value * energyPrice.value * usageTime.value;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = powerCons.value * energyPrice.value * (usageTime.value / 7);
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = powerCons.value * energyPrice.value * (usageTime.value / 30.4375);
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = powerCons.value * energyPrice.value * (usageTime.value / 365.25);
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('Error')
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = (powerCons.value * energyPrice.value * usageTime.value) / 1000;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = (powerCons.value * energyPrice.value * (usageTime.value / 7) / 1000);
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = (powerCons.value * energyPrice.value * (usageTime.value / 30.4375) / 1000);
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = (powerCons.value * energyPrice.value * (usageTime.value / 365.25) / 1000);
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('Error')
                    };
                    break;
                default: console.log('pw error')
            };
            break;
        case 'costweek':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = (powerCons.value * energyPrice.value * usageTime.value) * 7;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = (powerCons.value * energyPrice.value * (usageTime.value / 7)) * 7;
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = (powerCons.value * energyPrice.value * (usageTime.value / 30.4375)) * 7;
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = (powerCons.value * energyPrice.value * (usageTime.value / 365.25)) * 7;
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('qeeqwe')
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = (powerCons.value * energyPrice.value * usageTime.value) / 1000 * 7;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = (powerCons.value * energyPrice.value * (usageTime.value / 7)) / 1000 * 7;
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = (powerCons.value * energyPrice.value * (usageTime.value / 30.4375)) / 1000 * 7;
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = (powerCons.value * energyPrice.value * (usageTime.value / 365.25)) / 1000 * 7;
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('Error')
                    };
                    break;
                default: console.log('pw error')
            };
            break;
        case 'costmonth':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = (powerCons.value * energyPrice.value * usageTime.value) * 30.4375;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = (powerCons.value * energyPrice.value * (usageTime.value / 7)) * 30.4375;
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = (powerCons.value * energyPrice.value * (usageTime.value / 30.4375)) * 30.4375;
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = (powerCons.value * energyPrice.value * (usageTime.value / 365.25)) * 30.4375;
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('qeeqwe');
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = (powerCons.value * energyPrice.value * usageTime.value) / 1000 * 30.4375;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = (powerCons.value * energyPrice.value * (usageTime.value / 7)) / 1000 * 30.4375;
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = (powerCons.value * energyPrice.value * (usageTime.value / 30.4375)) / 1000 * 30.4375;
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = (powerCons.value * energyPrice.value * (usageTime.value / 365.25)) / 1000 * 30.4375;
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('Error');
                    };
                    break;
                default: console.log('month error')
            };
            break;

        case 'costyear':
            switch (powerSelect) {
                case 'kilowatts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = (powerCons.value * energyPrice.value * usageTime.value) * 365.25;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = (powerCons.value * energyPrice.value * (usageTime.value / 7)) * 365.25;
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = (powerCons.value * energyPrice.value * (usageTime.value / 30.4375)) * 365.25;
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = (powerCons.value * energyPrice.value * (usageTime.value / 365.25)) * 365.25;
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('qeeqwe');
                    }
                    break;
                case 'watts':
                    switch (usageSelect) {
                        case 'costday':
                            let day = (powerCons.value * energyPrice.value * usageTime.value) / 1000 * 365.25;
                            cost.value = Math.round(day * 100) / 100;
                            break;
                        case 'costweek':
                            let week = (powerCons.value * energyPrice.value * (usageTime.value / 7)) / 1000 * 365.25;
                            cost.value = Math.round(week * 100) / 100;
                            break;
                        case 'costmonth':
                            let month = (powerCons.value * energyPrice.value * (usageTime.value / 30.4375)) / 1000 * 365.25;
                            cost.value = Math.round(month * 100) / 100;
                            break;
                        case 'costyear':
                            let year = (powerCons.value * energyPrice.value * (usageTime.value / 365.25)) / 1000 * 365.25;
                            cost.value = Math.round(year * 100) / 100;
                            break;
                        default: console.log('Error');
                    };
                    break;
                default: console.log('year error')
            };
            break;

        default: console.log('Err');
    }
}
