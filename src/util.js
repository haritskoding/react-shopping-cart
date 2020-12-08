export default function formatCurrency(num) {
    return "Rp. " + Number(num.toFixed(1) * 14159.50).toLocaleString() + " ";
}