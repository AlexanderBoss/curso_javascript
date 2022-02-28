console.log("pregunta 4")
function logic(data) {
    const lines = data.split(/\r?\n|\r/);
    const TYPE_OF_SEGMENTS = {
        A: true,
        B: false,
        J: true,
        C: false
    };

    const DETAILS = {
        AA: "correcto",
        FN: "falta nombre",
        FF: "falta fecha",
        FD: "falta documento de identidad",
        FE: "falta edad",
        FM: "falta monto"
    };
    const segments = lines.reduce((acc, curr) => {
        const letter = curr.substr(3, 1);
        const isAPrincipalSegment = TYPE_OF_SEGMENTS[letter];
        if (!isAPrincipalSegment) {
            acc[acc.length - 1] = {
                ...acc[acc.length - 1],
                line: acc[acc.length - 1]["line"] + curr
            };
            return acc;
        }
        const id = curr.substr(4, 3);
        acc.push({ id, line: curr, principalSegment: letter });
        return acc;
    }, []);
    const segmentsWithDetails = segments.map((segment) => {
        const { principalSegment, line } = segment;
        let detail = line.substr(principalSegment === "A" ? 14 : 24, 10);
        let pairs = detail.match(/(..?)/g);
        const details = pairs.reduce((acc, curr) => {
            if (!curr.trim().length) return acc;
            acc = { ...acc, [curr]: DETAILS[curr] };
            return acc;
        }, {});
        return { ...segment, details };
    });

    console.log(segmentsWithDetails);
}

async function readAsyncData() {
    try {
        const data = await fetch("arhivo.txt");//aca se debe de poner la direccion del archivo txt en fetch
        return data.text()
    } catch (error) {
        return error;
    }
}
readAsyncData().then(logic).catch(console.error);