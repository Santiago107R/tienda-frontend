
const useUtils = () => {
    
    const numberFormat = (number: number | string): string => {
        const num = Number(number);

        if (isNaN(num)) return "0";

        return num.toLocaleString('es-AR');
    }
    
    return {
        numberFormat,
    }
}

export default useUtils
