async function nyttSitat() {
    const nyttSitat = document.getElementById("sitat-tekst");
    try {
        const response = await fetch ("https://api.chucknorris.io/jokes/random");
        if (!response.ok) {
            throw new Error("Feil. Kunne ikke laste sitater.");
        }
        const data = await response.json();
        nyttSitat.innerHTML = data.value;
    } catch(feil) {

    }
}

nyttSitat();