# Inscriere_candidati_facultate_NoSQL
## Tehnologii folosite
• În realizarea aplicației am folosit React.js pe partea de frontend, respectiv Node.js (Express.js ca și framework) pe partea de backend. <br/>
• Pentru stilizare am folosit Bootstrap (framework de CSS) și React-Bootstrap care pune la dispoziție diverse componente predefinite care înlocuiesc clasicele tag-uri din HTML. <br/>
• Baza de date a fost construită în MongoDB, iar integrarea acesteia în aplicația full-stack s-a făcut folosind Mongoose. <br/>
## Descrierea aplicației
• Scopul aplicației a fost însușirea cunoștițelor dobândite la cursul de baze de date NoSQL, mai exact de MongoDB. Astfel, am exemplificat crearea unei baze de date, a colecției „candidați”, a comenzilor CRUD și a agregărilor.<br/>
• Din intefață (partea de frontend) se pot vizualiza candidații înscriși la toate programele de licență sau doar cei care au printe opțiuni un anumit program de licență.<br/>
• La adăugarea unui candidat trebuie specificate numele, prenumele, adresa de email, dacă a încărcat sau nu eseul motivațional, media din liceu, opțiunile universitare în ordinea dorită și notele de la fiecare probă la bacalaureat.<br/>
• În funcție de datele introduse la adăugarea candidatului, se vor calcula automat media de la bacalaureat ca medie aritmetica a notelor pentru fiecare probă și media de admitere ca fiind medie ponderată dintre media din bac (80%) și media din liceu (20%).<br/>
• Candidații pot fi sortați ascendent sau descendent în funcție de media de admitere, pot fi editați sau șterși.<br/>
## Capturi de ecran din aplicație
• Vizualizarea tuturor candidaților<br/><br/>
![image](https://user-images.githubusercontent.com/74931542/220356585-f2f31ecf-36e4-4cf2-9c0f-4f8434082cc9.png)
<br/><br/>
• Vizualizarea candidaților care au printre opțiuni Facultatea de Marketing<br/><br/>
![image](https://user-images.githubusercontent.com/74931542/220357022-b785afd7-3408-42e8-b283-993cf6b04cb0.png)
<br/><br/>
• Adăugarea unui candidat<br/><br/>
![image](https://user-images.githubusercontent.com/74931542/220357513-8aea19d4-a075-4dee-9bf6-3f8a0e1abe91.png)
<br/><br/>
• Editarea candidatului adăugat anterior<br/><br/>
![image](https://user-images.githubusercontent.com/74931542/220357649-b13afb70-a7b0-4b3d-b45c-9795c79239e9.png)
![image](https://user-images.githubusercontent.com/74931542/220357818-2162edb0-7219-416f-91f4-651867f9ec54.png)
<br/><br/>
• Stergerea candidatului adăugat anterior<br/><br/>
![image](https://user-images.githubusercontent.com/74931542/220357931-bda972e0-78e7-47ad-b618-daeada04d6fd.png)
