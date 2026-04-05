# 💑 Notre Agenda — Guide d'installation

## Comment installer sur votre téléphone

### Étape 1 — Héberger les fichiers (gratuit, 5 min)

La méthode la plus simple est **Netlify Drop** :

1. Allez sur **netlify.com/drop**
2. Glissez-déposez le dossier `agenda-couple` entier
3. Vous obtenez une URL du type `https://votre-agenda.netlify.app`
4. C'est tout !

> Autres options gratuites : GitHub Pages, Vercel, Firebase Hosting

---

### Étape 2 — Installer sur votre iPhone

1. Ouvrez Safari (pas Chrome !) sur votre iPhone
2. Allez sur l'URL de votre app (ex: `https://votre-agenda.netlify.app`)
3. Appuyez sur le bouton **Partager** (rectangle avec flèche vers le haut)
4. Sélectionnez **"Sur l'écran d'accueil"**
5. Appuyez **"Ajouter"**

L'app apparaît comme une vraie application sur votre iPhone ! 🎉

---

### Étape 3 — Installer sur Android

1. Ouvrez Chrome sur votre Android
2. Allez sur l'URL de votre app
3. Chrome affiche automatiquement une bannière "Installer l'application"
4. Sinon : menu ⋮ → **"Ajouter à l'écran d'accueil"**

---

### Étape 4 — Synchronisation temps réel avec Firebase (recommandé)

Pour que vous et votre femme voyez les mêmes événements en temps réel :

1. Allez sur [console.firebase.google.com](https://console.firebase.google.com)
2. Créez un nouveau projet (ex: "notre-agenda")
3. Dans le menu : **Build → Realtime Database → Créer une base de données**
4. Choisissez la région Europe et le mode **test** pour commencer
5. Copiez l'URL (ex: `https://notre-agenda-default-rtdb.europe-west1.firebasedatabase.app`)
6. Collez cette URL dans le champ Firebase au lancement de l'app

**Votre femme fait exactement pareil** avec les mêmes :
- Prénoms (dans le même ordre)
- Code partagé
- URL Firebase

---

### Notifications quotidiennes

Pour activer le rappel quotidien automatique :
- **iPhone** : les notifications web sont supportées depuis iOS 16.4+ (via l'app installée sur l'écran d'accueil)
- **Android** : fonctionne automatiquement via Chrome

Acceptez les notifications quand l'app le demande. Vous recevrez chaque matin un résumé des événements du jour.

---

## Structure des fichiers

```
agenda-couple/
├── index.html      ← App principale
├── manifest.json   ← Configuration PWA
├── sw.js           ← Service Worker (hors ligne + notifications)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md       ← Ce fichier
```

---

*Fait avec ❤️ — Bonne organisation à tous les deux !*
