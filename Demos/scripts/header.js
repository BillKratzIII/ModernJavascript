const title = document.title;
const headerTarget = document.getElementById("headerInfo");
headerTarget.innerHTML = `
        <header style="padding-bottom:20px">
            <h1>${title}</h1>
            <a href="../index.html">
                Back to Demos index</a>      
        </header>
`;