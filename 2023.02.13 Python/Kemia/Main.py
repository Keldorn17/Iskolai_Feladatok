# Év;Elem;Vegyjel;Rendszám;Felfedező

class Kémiai_elem:
    def __init__(self, sor):
        s = sor.replace(u'\xa0', u' ').strip().split(';')
        év, elem, vegyjel, rendszám, felfedező = s
        self.év = int(év) if év != 'Ókor' else év
        self.elem = elem
        self.vegyjel = vegyjel
        self.rendszám = int(rendszám)
        self.felfedező = felfedező


with open('felfedezesek.csv', 'r', encoding='windows-1252') as f:
    fejléc = f.readline()
    lista = [Kémiai_elem(sor) for sor in f]

# 3. ##########################################################

print(f'3. feladat: Elemek száma:', len(lista))

# 4. ##########################################################

felfedezések_száma = sum([1 for sor in lista if sor.év == 'Ókor'])
print(f'4. feladat: Felfedezések száma az ókorban: {felfedezések_száma}')

# 5. ##########################################################

while True:
    vegyjel = input('5. feladat: Kérek egy vegyjelet: ')
    if (0 < len(vegyjel) < 3) and vegyjel.isalpha():
        vegyjel = vegyjel.upper()
        break

# 6. ##########################################################


kémiai_elem = [sor for sor in lista if sor.vegyjel.upper() == vegyjel]
print(f'6. feladat: Keresés')
if kémiai_elem:
    elem = kémiai_elem[0]
    print(f'\t\tAz elem vegyjele: {elem.vegyjel}')
    print(f'\t\tAz elem neve: {elem.elem}')
    print(f'\t\tRendszáma: {elem.rendszám}')
    print(f'\t\tFelfedezés éve: {elem.év}')
    print(f'\t\tFelfedező: {elem.felfedező}')
else:
    print(f'\t\tNincs ilyen elem az adatforrásban!')

# 7. ##########################################################

évek = [int(sor.év) for sor in lista if sor.év != 'Ókor']
dif = [évek[i + 1] - évek[i] for i, év in enumerate(évek) if i < len(évek) - 1]
print('7. feladat:', max(dif), 'év volt a leghosszabb időszak két elem felfedezése között.')

# 8. ##########################################################


statisztika = dict()

for év in évek:
    statisztika[év] = statisztika.get(év, 0) + 1

print(f'8. feladat: Statisztika')
res = [print(f'        {év} - {elemek_száma} db') for év, elemek_száma in statisztika.items() if elemek_száma > 3]

