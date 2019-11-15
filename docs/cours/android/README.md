# <center> Android</center>


## Persistance des données

### Préférence

* Equivalant base de registre Window

* Permet de stocker des options, des paramètres
  * Sous la forme de table associative<key, value> pour les types de base(float, bool, intstring)

* On peut fixer le mode de lecture/écriture:
  * **MODE_PRIVATE** : seulement accessible par l’application
  * **MODE_MULTI_PROCESS** : Permet au fichier d’être utilisé simultanément par plusieurs processus


### Stockage Externe

* Ajouter les permissions dans AndroidManifest.xml

``` xml
<uses-permission
android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission
```
