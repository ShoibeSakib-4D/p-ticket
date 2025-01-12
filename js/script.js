let count = 0
document.addEventListener('click',
         function getButton (event)
         {
             if(event.target.classList.contains('btn'))
             {   
                 count++;
                 event.target.classList.add('bg-[#1DD100]');
                 event.target.classList.add('text-white');
                 console.log(event.target.innerText);
                  const total = count;

                 const getAvailableSeats = document.getElementById('available-seats');
                 getAvailableSeatsText = getAvailableSeats.innerText;
                 totalSeats = parseInt(getAvailableSeatsText);
                 finalTotalSeats = totalSeats - 1;
                 getAvailableSeats.innerText = finalTotalSeats;

                 if(total === 4)
                 { 
                    const getAlertSection = document.getElementById('alert-section');
                    getAlertSection.classList.remove('hidden');
                    const getButtonSection = document.getElementById('full-button-section');
                    getButtonSection.classList.add('hidden');
                 }
                
                 
             }
             if(event.target.classList.contains('btn'))
             {
                const classType = 'Economy';
             const price = '500'
            const getSeatInfo = event.target.innerText;
                const getSelected = document.getElementById('getSelectedSeat');
            const row = document.createElement('div');
            row.style.display = 'flex';
            row.style.justifyContent = 'space-between';
            row.style.padding = "5px 50px"
             row.innerHTML = 
                ` 
                <h1>${getSeatInfo}</h1>
                <h1>${classType}</h1>
                <h1>${price}</h1>
                `
                getSelected.appendChild(row);
             }

                const totalTaka = document.getElementById('total-taka');
                totalTaka.innerText = 500 * count;

                const totalTakaAfterDiscont = document.getElementById('total-taka-after-discount');
                totalTakaAfterDiscont.innerText = 500 * count;

                const takaGrant =  document.getElementById('total-taka-after-discount');
                const finalTaka = takaGrant.innerText;
                const grandFinalTaka = parseInt(finalTaka);
                
            const getDiscountSection = document.getElementById('getInput');
            if(getDiscountSection.value === 'NEW15')
            {
                const final = grandFinalTaka;
                const discount = final - ( final * 15/100  ) 
                takaGrant.innerText = discount;
            }
            if(getDiscountSection.value === 'Couple 20')
            {
                const final = grandFinalTaka;
                const discount = final - ( final * 20/100  ) 
                takaGrant.innerText = discount;
            }



}
       
    ) 

    const getEmailSection = document.getElementById('input-email')
    const getNumberSection = document.getElementById('input-nmb')

    if(getEmailSection.type === 'email' && getNumberSection.type === 'text')
    {
        const getNextBtn = document.getElementById('next-btn');
        getNextBtn.classList.remove('hidden');
    }