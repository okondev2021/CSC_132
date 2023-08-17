document.addEventListener('DOMContentLoaded',function(){




    
    const width = window.innerWidth

    const parent = document.querySelector('.collaborators_track')
    const numbersOfContributors = parent.childElementCount





    if(width <= 768 && width >= 600){

        // Set the display property of the last child element to none
        const parentDiv = document.querySelector('.collaborators_track')
        parentDiv.lastElementChild.style.display = 'none'

        // Switch collaborators after the set time

        var animationCount = []
        for(let i = 1; i<= numbersOfContributors; i++){
            animationCount.push(i)
        }

        setInterval(()=>{

            const prevFirst = parentDiv.firstElementChild

            parentDiv.firstElementChild.remove()
            parentDiv.lastElementChild.style.display = 'block'

            parentDiv.append(prevFirst)
            prevFirst.style.display = 'none'

        }, 3000 )

    }





    if(width <= 500){

        document.querySelectorAll(".collaborator").forEach(function(collaborator){
            collaborator.style.display = 'none'
        })
        document.getElementById('collaborator_1').style.display = 'block'

        var collaborator_count = 1;
        var collaboratorsCount = numbersOfContributors
        
        setInterval(()=>{

            document.querySelectorAll(".collaborator").forEach(function(collaborator){
                collaborator.style.display = 'none'
            })
            document.getElementById(`collaborator_${collaborator_count}`).style.display = 'block'

            collaborator_count++

            if (collaborator_count > collaboratorsCount){
                collaborator_count = 1
            }



        }, 3000)

    }

})