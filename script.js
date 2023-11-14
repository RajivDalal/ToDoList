const ul = document.querySelector('ul');
ul.addEventListener("contextmenu", e => e.preventDefault());

function addToDo()
{
    const input = document.querySelector('#enter');
    
    const ul = document.querySelector('ul');
    ul.innerHTML += `<li>${input.value}</li>`;

    const lis = document.querySelectorAll('li');
    const li = lis[lis.length-1];

    li.setAttribute('onclick','cross(this)');
    li.setAttribute('oncontextmenu','del(this)');

    const form = document.querySelector('form');
    form.reset();

    return false;
}

function cross(obj)
{
    if(obj.classList[0]==="cross")
    {
        obj.style = "text-decoration: none";
        obj.classList.toggle("cross");
    }
    else
    {
        obj.style = "text-decoration: line-through";
        obj.classList.toggle("cross");
    }
}

function del(obj)
{
    const lis = document.querySelectorAll('li');

    const ul = document.querySelector('ul');
    ul.innerHTML = "";
    
    lis.forEach(li => {
        if(li!=obj)
        {
            ul.innerHTML+=li.outerHTML;
        }
    });
}

