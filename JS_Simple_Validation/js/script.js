function getTriangleArea(a, h) {
    if (a <= 0) {
        return("Nieprawidłowe dane: a nie może być mniejsze od zera");
    }
    else if ( h <= 0) {
        return("Nieprawidłowe dane: h nie może być mniejsze od zera");
    }
    else {
        return(a*h/2);
    }
}
console.log(getTriangleArea(20, -6));

let TriangleArea1 = getTriangleArea(40, 20);
console.log(TriangleArea1);

let TriangleArea2 = getTriangleArea(7, 2);
console.log(TriangleArea2);

let TriangleArea3 = getTriangleArea (10, 20);
console.log(TriangleArea3);
