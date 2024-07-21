#include <stdio.h>

#define M 2
#define N 3

void permut(int L[M][N], int R[N][M]) {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            R[i][j] = L[j][i];
        }
    }
}

int main() {
    int L[M][N] = { 
        {1, 2, 3}, 
        {4, 5, 6} 
    };
    int R[N][M];

    permut(L, R);

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            printf("%d ", R[i][j]);
        }
        printf("\n");
    }

    return 0;
}
