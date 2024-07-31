#include <stdio.h>

int trouverManquant(int arr[], int n) {
    int d = (arr[n - 1] - arr[0]) / n;
    int a = arr[0];
    int totalTerms = n + 1;
    int sommeAttendue = (totalTerms * (2 * a + (totalTerms - 1) * d)) / 2;
    int sommeReelle = 0;
    for (int i = 0; i < n; i++) {
        sommeReelle += arr[i];
    }
    int termeManquant = sommeAttendue - sommeReelle;
    return termeManquant;
}

int main() {
    int arr[] = {1, 3, 5, 9, 11};
    int n = sizeof(arr) / sizeof(arr[0]);
    int manquant = trouverManquant(arr, n);
    printf("Le terme manquant  de votre liste est : %d\n", manquant);
    return 0;
}
