function palya_ellenorzes_Keresztben() {
    // Keresztben X - Bal fentről
    if (palya[0] == 'X') {
        if (palya[4] == 'X') {
            if (palya[8] == 'X') {
                jatek_vege('X')
            }
        }
    }
    // Keresztben X - Jobb fentről
    if (palya[2] == 'X') {
        if (palya[3] == 'X') {
            if (palya[6] == 'X') {
                jatek_vege('X')
            }
        }
    }
    // Keresztben O - Bal fentről
    if (palya[0] == 'O') {
        if (palya[4] == 'O') {
            if (palya[8] == 'O') {
                jatek_vege('o')
            }
        }
    }
    // Keresztben O - Jobb fentről
    if (palya[2] == 'O') {
        if (palya[3] == 'O') {
            if (palya[6] == 'O') {
                jatek_vege('O')
            }
        }
    }
}

// Pálya ellenőrzés X részére
function palya_ellenorzes_X() {
    // Vízszintes X - Felső
    if (palya[0] == 'X') {
        if (palya[1] == 'X') {
            if (palya[2] == 'X') {
                jatek_vege('X')
            }
        }
    }
    // Vízszintes X - Középső
    if (palya[3] == 'X') {
        if (palya[4] == 'X') {
            if (palya[5] == 'X') {
                jatek_vege('X')
            }
        }
    }
    // Vízszintes X - Alsó
    if (palya[6] == 'X') {
        if (palya[7] == 'X') {
            if (palya[8] == 'X') {
                jatek_vege('X')
            }
        }
    }

    // Függőleges X - Bal
    if (palya[0] == 'X') {
        if (palya[3] == 'X') {
            if (palya[6] == 'X') {
                jatek_vege('X')
            }
        }
    }
    // Függőleges X - Középső
    if (palya[1] == 'X') {
        if (palya[4] == 'X') {
            if (palya[7] == 'X') {
                jatek_vege('X')
            }
        }
    }
    // Függőleges X - Jobb
    if (palya[2] == 'X') {
        if (palya[5] == 'X') {
            if (palya[8] == 'X') {
                jatek_vege('X')
            }
        }
    }
}

// Pálya ellenőrzés O részére
function palya_ellenorzes_O() {
    // Vízszintes O - Felső
    if (palya[0] == 'O') {
        if (palya[1] == 'O') {
            if (palya[2] == 'O') {
                jatek_vege('O')
            }
        }
    }
    // Vízszintes O - Középső
    if (palya[3] == 'O') {
        if (palya[4] == 'O') {
            if (palya[5] == 'O') {
                jatek_vege('O')
            }
        }
    }
    // Vízszintes O - Alsó
    if (palya[6] == 'O') {
        if (palya[7] == 'O') {
            if (palya[8] == 'O') {
                jatek_vege('O')
            }
        }
    }

    // Függőleges O - Bal
    if (palya[0] == 'O') {
        if (palya[3] == 'O') {
            if (palya[6] == 'O') {
                jatek_vege('O')
            }
        }
    }
    // Függőleges O - Középső
    if (palya[1] == 'O') {
        if (palya[4] == 'O') {
            if (palya[7] == 'O') {
                jatek_vege('O')
            }
        }
    }
    // Függőleges O - Jobb
    if (palya[2] == 'O') {
        if (palya[5] == 'O') {
            if (palya[8] == 'O') {
                jatek_vege('O')
            }
        }
    }
}