
document.addEventListener('DOMContentLoaded', () => {
  window.onload = function () {
    const hasRefreshed = sessionStorage.getItem('hasRefreshed');
    if (!hasRefreshed) {
      sessionStorage.setItem('hasRefreshed', 'true');
      window.location.reload(true);
    }
  };
});
const translations = {
  close_button: { AR: "إغلاق", DE: "Schließen", EN: "Close", ES: "Cerrar", FA: "بستن", FR: "Fermer", HI: "बंद करें", ID: "Tutup", IT: "Chiudi", JA: "閉じる", KO: "닫기", SW: "Funga", PL: "Zamknij", PT: "Fechar", RU: "Закрыть", VI: "Đóng", TR: "Kapat", UR: "بند کریں", UZ: "Yopish", ZH: "关闭", NL: "Sluiten", SV: "Stäng", EL: "Κλείσιμο", CS: "Zavřít", HU: "Bezárás", RO: "Închide", BG: "Затвори", DA: "Luk", FI: "Sulje", SL: "Zapri" },
  change_language: { AR: "تغيير اللغة", DE: "Sprache ändern", EN: "Change Language", ES: "Cambiar idioma", FA: "تغییر زبان", FR: "Changer de langue", HI: "भाषा बदलें", ID: "Ganti Bahasa", IT: "Cambia lingua", JA: "言語を変更", KO: "언어 변경", SW: "Badilisha Lugha", PL: "Zmień język", PT: "Mudar idioma", RU: "Изменить язык", VI: "Đổi ngôn ngữ", TR: "Dili değiştir", UR: "زبان تبدیل کریں", UZ: "Tilni o'zgartirish", ZH: "更改语言", NL: "Taal wijzigen", SV: "Ändra språk", EL: "Αλλαγή γλώσσας", CS: "Změnit jazyk", HU: "Nyelv változtatása", RO: "Schimbă limba", BG: "Смяна на езика", DA: "Skift sprog", FI: "Vaihda kieltä", SL: "Spremeni jezik" },
  saved: { AR: "تم الحفظ", DE: "Gespeichert", EN: "Saved", ES: "Guardado", FA: "ذخیره شد", FR: "Enregistré", HI: "सहेजा गया", ID: "Tersimpan", IT: "Salvato", JA: "保存されました", KO: "저장됨", SW: "Imehifadhiwa", PL: "Zapisano", PT: "Salvo", RU: "Сохранено", VI: "Đã lưu", TR: "Kaydedildi", UR: "محفوظ کرلیا گیا", UZ: "Saqlangan", ZH: "已保存", NL: "Opgeslagen", SV: "Sparad", EL: "Αποθηκεύτηκε", CS: "Uloženo", HU: "Mentve", RO: "Salvat", BG: "Запазено", DA: "Gemt", FI: "Tallennettu", SL: "Shranjeno" },
  note: { AR: "ملاحظة", DE: "Notiz", EN: "Note", ES: "Nota", FA: "یادداشت", FR: "Note", HI: "नोट", ID: "Catatan", IT: "Nota", JA: "ノート", KO: "노트", SW: "Kumbuka", PL: "Notatka", PT: "Nota", RU: "Заметка", VI: "Ghi chú", TR: "Not", UR: "نوٹ", UZ: "Eslatma", ZH: "笔记", NL: "Notitie", SV: "Not", EL: "Σημείωση", CS: "Poznámka", HU: "Jegyzet", RO: "Notă", BG: "Бележка", DA: "Notat", FI: "Merkintä", SL: "Opomba" },
  category_name: { AR: "اسم الفئة", DE: "Kategoriename", EN: "Category Name", ES: "Nombre de categoría", FA: "نام دسته‌بندی", FR: "Nom de la catégorie", HI: "श्रेणी का नाम", ID: "Nama Kategori", IT: "Nome della categoria", JA: "カテゴリ名", KO: "카테고리 이름", SW: "Jina la Kategoria", PL: "Nazwa kategorii", PT: "Nome da Categoria", RU: "Название категории", VI: "Tên danh mục", TR: "Kategori Adı", UR: "زمرہ کا نام", UZ: "Kategoriya nomi", ZH: "类别名称", NL: "Categorienaam", SV: "Kategorinamn", EL: "Όνομα κατηγορίας", CS: "Název kategorie", HU: "Kategória neve", RO: "Numele categoriei", BG: "Име на категорията", DA: "Kategorinavn", FI: "Kategorian nimi", SL: "Ime kategorije" },
  add: { AR: "إضافة", DE: "Hinzufügen", EN: "Add", ES: "Agregar", FA: "اضافه کردن", FR: "Ajouter", HI: "जोड़ें", ID: "Tambahkan", IT: "Aggiungi", JA: "追加", KO: "추가", SW: "Ongeza", PL: "Dodaj", PT: "Adicionar", RU: "Добавить", VI: "Thêm", TR: "Ekle", UR: "شامل کریں", UZ: "Qo'shish", ZH: "添加", NL: "Toevoegen", SV: "Lägg till", EL: "Προσθήκη", CS: "Přidat", HU: "Hozzáadás", RO: "Adaugă", BG: "Добави", DA: "Tilføj", FI: "Lisää", SL: "Dodaj" },
  cancel: { AR: "إلغاء", DE: "Abbrechen", EN: "Cancel", ES: "Cancelar", FA: "لغو", FR: "Annuler", HI: "रद्द करें", ID: "Batal", IT: "Annulla", JA: "キャンセル", KO: "취소", SW: "Ghairi", PL: "Anuluj", PT: "Cancelar", RU: "Отмена", VI: "Hủy", TR: "İptal", UR: "منسوخ کریں", UZ: "Bekor qilish", ZH: "取消", NL: "Annuleren", SV: "Avbryt", EL: "Ακύρωση", CS: "Zrušit", HU: "Mégsem", RO: "Anulează", BG: "Отказ", DA: "Annuller", FI: "Peruuta", SL: "Prekliči" },
  cat_name_empty: { AR: "اسم الفئة لا يمكن أن يكون فارغًا!", DE: "Kategoriename darf nicht leer sein!", EN: "Category name cannot be empty!", ES: "¡El nombre de la categoría no puede estar vacío!", FA: "نام دسته بندی نمی تواند خالی باشد!", FR: "Le nom de la catégorie ne peut pas être vide!", HI: "श्रेणी का नाम खाली नहीं हो सकता!", ID: "Nama kategori tidak boleh kosong!", IT: "Il nome della categoria non può essere vuoto!", JA: "カテゴリ名は空にできません！", KO: "카테고리 이름은 비어 있을 수 없습니다!", SW: "Jina la jamii halitakiwi kuwa tupu!", PL: "Nazwa kategorii nie może być pusta!", PT: "O nome da categoria não pode estar vazio!", RU: "Название категории не может быть пустым!", VI: "Tên danh mục không thể để trống!", TR: "Kategori adı boş olamaz!", UR: "زمرے کا نام خالی نہیں ہو سکتا!", UZ: "Kategoriya nomi bo'sh bo'lishi mumkin emas!", ZH: "类别名称不能为空！", NL: "Categorienaam mag niet leeg zijn!", SV: "Kategorinamn får inte vara tomt!", EL: "Το όνομα της κατηγορίας δεν μπορεί να είναι κενό!", CS: "Název kategorie nesmí být prázdný!", HU: "A kategória neve nem lehet üres!", RO: "Numele categoriei nu poate fi gol!", BG: "Името на категорията не може да бъде празно!", DA: "Kategorinavn må ikke være tomt!", FI: "Kategorian nimi ei voi olla tyhjä!", SL: "Ime kategorije ne sme biti prazno!" },
  note_title: { AR: "عنوان الملاحظة:", DE: "Notizentitel:", EN: "Note Title:", ES: "Título de la nota:", FA: "عنوان یادداشت:", FR: "Titre de la note:", HI: "नोट का शीर्षक:", ID: "Judul Catatan:", IT: "Titolo della nota:", JA: "ノートのタイトル:", KO: "노트 제목:", SW: "Kichwa cha Kumbukumbu:", PL: "Tytuł notatki:", PT: "Título da nota:", RU: "Заголовок заметки:", VI: "Tiêu đề ghi chú:", TR: "Not Başlığı:", UR: "نوٹ کا عنوان:", UZ: "Eslatma sarlavhasi:", ZH: "笔记标题:", NL: "Notitietitel:", SV: "Notistiteln:", EL: "Τίτλος σημείωσης:", CS: "Název poznámky:", HU: "Jegyzet címe:", RO: "Titlul notei:", BG: "Заглавие на бележката:", DA: "Notatitel:", FI: "Muistiinpanon otsikko:", SL: "Naslov opombe:" },
  task_title: { AR: "عنوان المهمة:", DE: "Aufgabentitel:", EN: "Task Title:", ES: "Título de la tarea:", FA: "عنوان وظیفه:", FR: "Titre de la tâche:", HI: "कार्य का शीर्षक:", ID: "Judul Tugas:", IT: "Titolo del compito:", JA: "タスクタイトル:", KO: "작업 제목:", SW: "Kichwa cha Kazi:", PL: "Tytuł zadania:", PT: "Título da tarefa:", RU: "Название задачи:", VI: "Tiêu đề nhiệm vụ:", TR: "Görev Başlığı:", UR: "کام کا عنوان:", UZ: "Vazifa sarlavhasi:", ZH: "任务标题:", NL: "Taaktitel:", SV: "Uppgiftstiteln:", EL: "Τίτλος εργασίας:", CS: "Název úkolu:", HU: "Feladat címe:", RO: "Titlul sarcinii:", BG: "Заглавие на задачата:", DA: "Opgavetitel:", FI: "Tehtävän otsikko:", SL: "Naslov naloge:" },
  note_title_empty: { AR: "عنوان الملاحظة لا يمكن أن يكون فارغًا!", DE: "Notizentitel darf nicht leer sein!", EN: "Note title cannot be empty!", ES: "¡El título de la nota no puede estar vacío!", FA: "عنوان یادداشت نمی تواند خالی باشد!", FR: "Le titre de la note ne peut pas être vide!", HI: "नोट का शीर्षक खाली नहीं हो सकता!", ID: "Judul catatan tidak boleh kosong!", IT: "Il titolo della nota non può essere vuoto!", JA: "ノートのタイトルは空にできません！", KO: "노트 제목은 비어 있을 수 없습니다!", SW: "Kichwa cha kumbukumbu halitakiwi kuwa tupu!", PL: "Tytuł notatki nie może być pusty!", PT: "O título da nota não pode estar vazio!", RU: "Заголовок заметки не может быть пустым!", VI: "Tiêu đề ghi chú không thể để trống!", TR: "Not başlığı boş olamaz!", UR: "نوٹ کا عنوان خالی نہیں ہو سکتا!", UZ: "Eslatma sarlavhasi bo'sh bo'lishi mumkin emas!", ZH: "笔记标题不能为空！", NL: "Notitietitel mag niet leeg zijn!", SV: "Notistiteln får inte vara tom!", EL: "Ο τίτλος της σημείωσης δεν μπορεί να είναι κενός!", CS: "Název poznámky nesmí být prázdný!", HU: "A jegyzet címe nem lehet üres!", RO: "Titlul notei nu poate fi gol!", BG: "Заглавието на бележката не може да бъде празно!", DA: "Notatitel må ikke være tom!", FI: "Muistiinpanon otsikko ei voi olla tyhjä!", SL: "Naslov opombe ne sme biti prazen!" },
  task_title_cannot_be_empty: { AR: "عنوان المهمة لا يمكن أن يكون فارغًا!", DE: "Der Aufgabentitel darf nicht leer sein!", EN: "Task title cannot be empty!", ES: "¡El título de la tarea no puede estar vacío!", FA: "عنوان وظیفه نمی‌تواند خالی باشد!", FR: "Le titre de la tâche ne peut pas être vide!", HI: "कार्य का शीर्षक खाली नहीं हो सकता!", ID: "Judul tugas tidak boleh kosong!", IT: "Il titolo del compito non può essere vuoto!", JA: "タスクのタイトルは空にできません！", KO: "작업 제목은 비어 있을 수 없습니다!", SW: "Kichwa cha kazi halitakiwi kuwa tupu!", PL: "Tytuł zadania nie może być pusty!", PT: "O título da tarefa não pode estar vazio!", RU: "Название задачи не может быть пустым!", VI: "Tiêu đề nhiệm vụ không thể để trống!", TR: "Görev başlığı boş olamaz!", UR: "کام کا عنوان خالی نہیں ہو سکتا!", UZ: "Vazifa sarlavhasi bo'sh bo'lishi mumkin emas!", ZH: "任务标题不能为空！", NL: "Taaktitel mag niet leeg zijn!", SV: "Uppgiftstiteln får inte vara tom!", EL: "Ο τίτλος της εργασίας δεν μπορεί να είναι κενός!", CS: "Název úkolu nesmí být prázdný!", HU: "A feladat címe nem lehet üres!", RO: "Titlul sarcinii nu poate fi gol!", BG: "Заглавието на задачата не може да бъде празно!", DA: "Opgavetitel må ikke være tom!", FI: "Tehtävän otsikko ei voi olla tyhjä!", SL: "Naslov naloge ne sme biti prazen!" },
  please_add_category_first: { AR: "يرجى إضافة فئة أولاً", DE: "Bitte fügen Sie zuerst eine Kategorie hinzu", EN: "Please add a category first", ES: "Por favor, añade una categoría primero", FA: "لطفاً ابتدا یک دسته بندی اضافه کنید", FR: "Veuillez d'abord ajouter une catégorie", HI: "कृपया पहले एक श्रेणी जोड़ें", ID: "Silakan tambahkan kategori terlebih dahulu", IT: "Si prega di aggiungere prima una categoria", JA: "まずカテゴリーを追加してください", KO: "먼저 카테고리를 추가해 주세요", SW: "Tafadhali ongeza jamii kwanza", PL: "Proszę najpierw dodać kategorię", PT: "Por favor, adicione uma categoria primeiro", RU: "Пожалуйста, сначала добавьте категорию", VI: "Vui lòng thêm danh mục trước", TR: "Lütfen önce bir Kategori Ekleyin", UR: "براہ کرم پہلے ایک زمرہ شامل کریں", UZ: "Iltimos, avval kategoriya qo'shing", ZH: "请先添加一个分类", NL: "Voeg eerst een categorie toe", SV: "Lägg till en kategori först", EL: "Παρακαλώ προσθέστε πρώτα μια κατηγορία", CS: "Nejprve přidejte kategorii", HU: "Kérjük, előbb adjon hozzá egy kategóriát", RO: "Vă rugăm să adăugați mai întâi o categorie", BG: "Моля, първо добавете категория", DA: "Tilføj venligst en kategori først", FI: "Lisää ensin kategoria", SL: "Najprej dodajte kategorijo" },
  are_you_sure_delete_note: { AR: "هل أنت متأكد أنك تريد حذف هذه الملاحظة؟", DE: "Sind Sie sicher, dass Sie diese Notiz löschen möchten?", EN: "Are you sure you want to delete this note?", ES: "¿Estás seguro de que quieres eliminar esta nota?", FA: "آیا مطمئنید که می‌خواهید این یادداشت را حذف کنید؟", FR: "Êtes-vous sûr de vouloir supprimer cette note ?", HI: "क्या आप वाकई इस नोट को हटाना चाहते हैं?", ID: "Apakah Anda yakin ingin menghapus catatan ini?", IT: "Sei sicuro di voler eliminare questa nota?", JA: "このノートを削除してもよろしいですか？", KO: "이 노트를 삭제하시겠습니까?", SW: "Je, una uhakika unataka kufuta kumbukumbu hii?", PL: "Czy na pewno chcesz usunąć tę notatkę?", PT: "Tem certeza de que deseja excluir esta nota?", RU: "Вы уверены, что хотите удалить эту заметку?", VI: "Bạn có chắc chắn muốn xóa ghi chú này không?", TR: "Bu notu silmek istediğinizden emin misiniz?", UR: "کیا آپ واقعی طور پر اس نوٹ کو حذف کرنا چاہتے ہیں؟", UZ: "Bu eslatmani o'chirishni xohlaysizmi?", ZH: "你确定要删除这个笔记吗？", NL: "Weet je zeker dat je deze notitie wilt verwijderen?", SV: "Är du säker på att du vill ta bort denna anteckning?", EL: "Είστε σίγουροι ότι θέλετε να διαγράψετε αυτή τη σημείωση;", CS: "Jste si jisti, že chcete tuto poznámku smazat?", HU: "Biztosan törölni szeretné ezt a jegyzetet?", RO: "Ești sigur că vrei să ștergi această notă?", BG: "Сигурни ли сте, че искате да изтриете тази бележка?", DA: "Er du sikker på, at du vil slette denne note?", FI: "Haluatko varmasti poistaa tämän muistiinpanon?", SL: "Ali ste prepričani, da želite izbrisati to opombo?" },
  delete: { AR: "حذف", DE: "Löschen", EN: "Delete", ES: "Eliminar", FA: "حذف", FR: "Supprimer", HI: "हटाएं", ID: "Hapus", IT: "Elimina", JA: "削除", KO: "삭제", SW: "Futa", PL: "Usuń", PT: "Excluir", RU: "Удалить", VI: "Xóa", TR: "Sil", UR: "حذف کریں", UZ: "O'chirish", ZH: "删除", NL: "Verwijderen", SV: "Radera", EL: "Διαγραφή", CS: "Smazat", HU: "Törlés", RO: "Șterge", BG: "Изтрий", DA: "Slet", FI: "Poista", SL: "Izbriši" },
  warning_category_and_notes_will_be_deleted: { AR: "تحذير! سيتم حذف هذه الفئة وجميع الملاحظات المتعلقة بها.", DE: "Warnung! Diese Kategorie und alle dazugehörigen Notizen werden gelöscht.", EN: "Warning! This category and all notes belonging to it will be deleted.", ES: "¡Advertencia! Esta categoría y todas las notas que le pertenecen serán eliminadas.", FA: "هشدار! این دسته بندی و همه یادداشت‌های مربوط به آن حذف خواهند شد.", FR: "Attention ! Cette catégorie et toutes les notes qui lui appartiennent seront supprimées.", HI: "चेतावनी! यह श्रेणी और इसके सभी नोट्स हटा दिए जाएंगे।", ID: "Peringatan! Kategori ini dan semua catatan yang terkait dengannya akan dihapus.", IT: "Attenzione! Questa categoria e tutte le note ad essa associate verranno eliminate.", JA: "警告！このカテゴリとそれに属するすべてのノートが削除されます。", KO: "경고! 이 카테고리와 이 카테고리에 속한 모든 노트가 삭제됩니다.", SW: "Onyo! Jamii hii na kumbukumbu zote zinazokwenda nayo zitafutwa.", PL: "Ostrzeżenie! Ta kategoria i wszystkie należące do niej notatki zostaną usunięte.", PT: "Aviso! Esta categoria e todas as notas pertencentes a ela serão excluídas.", RU: "Внимание! Эта категория и все заметки, принадлежащие ей, будут удалены.", VI: "Cảnh báo! Danh mục này và tất cả ghi chú thuộc danh mục này sẽ bị xóa.", TR: "Uyarı! Bu kategori ve bu kategoriye ait tüm notlar silinecek.", UR: "انتباہ! یہ زمرہ اور اس زمرے کے تمام نوٹس حذف کر دیے جائیں گے۔", UZ: "Ogohlantirish! Ushbu kategoriya va unga tegishli barcha eslatmalar o'chiriladi.", ZH: "警告！此类别及其所有笔记将被删除。", NL: "Waarschuwing! Deze categorie en alle bijbehorende notities worden verwijderd.", SV: "Varning! Denna kategori och alla anteckningar som tillhör den kommer att raderas.", EL: "Προειδοποίηση! Αυτή η κατηγορία και όλες οι σημειώσεις που της ανήκουν θα διαγραφούν.", CS: "Varování! Tato kategorie a všechny poznámky, které k ní patří, budou smazány.", HU: "Figyelmeztetés! Ez a kategória és az összes hozzá tartozó jegyzet törlésre kerül.", RO: "Atenție! Această categorie și toate notele care îi aparțin vor fi șterse.", BG: "Внимание! Тази категория и всички бележки, които й принадлежат, ще бъдат изтрити.", DA: "Advarsel! Denne kategori og alle tilhørende noter vil blive slettet.", FI: "Varoitus! Tämä kategoria ja kaikki siihen liittyvät muistiinpanot poistetaan.", SL: "Opozorilo! Ta kategorija in vse opombe, ki pripadajo njej, bodo izbrisane." },
  paste_as_text: { AR: "لصق كنص", DE: "Als Text einfügen", EN: "Paste as text", ES: "Pegar como texto", FA: "چسباندن به صورت متن", FR: "Coller en tant que texte", HI: "टेक्स्ट के रूप में चिपकाएं", ID: "Tempel sebagai teks", IT: "Incolla come testo", JA: "テキストとして貼り付け", KO: "텍스트로 붙여넣기", SW: "Bandika kama maandishi", PL: "Wklej jako tekst", PT: "Colar como texto", RU: "Вставить как текст", VI: "Dán dưới dạng văn bản", TR: "Metin olarak yapıştır", UR: "متن کے طور پر چسپاں کریں", UZ: "Matn sifatida joylashtiring", ZH: "粘贴为文本", NL: "Plakken als tekst", SV: "Klistra in som text", EL: "Επικόλληση ως κείμενο", CS: "Vložit jako text", HU: "Beillesztés szövegként", RO: "Lipește ca text", BG: "Постави като текст", DA: "Indsæt som tekst", FI: "Liitä tekstinä", SL: "Prilepi kot besedilo" },
  paste: { AR: "لصق", DE: "Einfügen", EN: "Paste", ES: "Pegar", FA: "چسباندن", FR: "Coller", HI: "चिपकाएं", ID: "Tempel", IT: "Incolla", JA: "貼り付け", KO: "붙여넣기", SW: "Bandika", PL: "Wklej", PT: "Colar", RU: "Вставить", VI: "Dán", TR: "Yapıştır", UR: "چسپاں کریں", UZ: "Joylashtirish", ZH: "粘贴", NL: "Plakken", SV: "Klistra in", EL: "Επικόλληση", CS: "Vložit", HU: "Beillesztés", RO: "Lipește", BG: "Постави", DA: "Indsæt", FI: "Liitä", SL: "Prilepi" },
  copy: { AR: "نسخ", DE: "Kopieren", EN: "Copy", ES: "Copiar", FA: "کپی", FR: "Copier", HI: "कॉपी करें", ID: "Salin", IT: "Copia", JA: "コピー", KO: "복사", SW: "Nakili", PL: "Kopiuj", PT: "Copiar", RU: "Копировать", VI: "Sao chép", TR: "Kopyala", UR: "کاپی کریں", UZ: "Nusxalash", ZH: "复制", NL: "Kopiëren", SV: "Kopiera", EL: "Αντιγραφή", CS: "Kopírovat", HU: "Másolás", RO: "Copiază", BG: "Копирай", DA: "Kopiér", FI: "Kopioi", SL: "Kopiraj" },
  cut: { AR: "قص", DE: "Ausschneiden", EN: "Cut", ES: "Cortar", FA: "بریدن", FR: "Couper", HI: "काटें", ID: "Potong", IT: "Taglia", JA: "切り取り", KO: "잘라내기", SW: "Kata", PL: "Wytnij", PT: "Recortar", RU: "Вырезать", VI: "Cắt", TR: "Kes", UR: "کاٹیں", UZ: "Kesish", ZH: "剪切", NL: "Knippen", SV: "Klipp ut", EL: "Αποκοπή", CS: "Vyjmout", HU: "Kivágás", RO: "Taie", BG: "Изрежи", DA: "Klip", FI: "Leikkaa", SL: "Izreži" },
  add_html_code: { AR: "إضافة كود HTML", DE: "HTML-Code hinzufügen", EN: "Add HTML Code", ES: "Agregar código HTML", FA: "افزودن کد HTML", FR: "Ajouter du code HTML", HI: "HTML कोड जोड़ें", ID: "Tambahkan Kode HTML", IT: "Aggiungi codice HTML", JA: "HTMLコードを追加", KO: "HTML 코드 추가", SW: "Ongeza msimbo wa HTML", PL: "Dodaj kod HTML", PT: "Adicionar código HTML", RU: "Добавить HTML-код", VI: "Thêm mã HTML", TR: "HTML Kodu Ekle", UR: "HTML کوڈ شامل کریں", UZ: "HTML kodi qo'shish", ZH: "添加HTML代码", NL: "HTML-code toevoegen", SV: "Lägg till HTML-kod", EL: "Προσθήκη κώδικα HTML", CS: "Přidat HTML kód", HU: "HTML kód hozzáadása", RO: "Adaugă cod HTML", BG: "Добави HTML код", DA: "Tilføj HTML-kode", FI: "Lisää HTML-koodi", SL: "Dodaj kodo HTML" },
  select_table_size: { AR: "اختر حجم الجدول", DE: "Tabellengröße auswählen", EN: "Select Table Size", ES: "Seleccionar tamaño de la tabla", FA: "اندازه جدول را انتخاب کنید", FR: "Sélectionnez la taille du tableau", HI: "टेबल का आकार चुनें", ID: "Pilih ukuran tabel", IT: "Seleziona dimensione tabella", JA: "表のサイズを選択", KO: "표 크기 선택", SW: "Chagua ukubwa wa meza", PL: "Wybierz rozmiar tabeli", PT: "Selecionar tamanho da tabela", RU: "Выберите размер таблицы", VI: "Chọn kích thước bảng", TR: "Tablo Boyutunu Seç", UR: "ٹیبل کا سائز منتخب کریں", UZ: "Jadval o'lchamini tanlang", ZH: "选择表格大小", NL: "Selecteer tabelgrootte", SV: "Välj tabellstorlek", EL: "Επιλογή μεγέθους πίνακα", CS: "Vybrat velikost tabulky", HU: "Táblázat méretének kiválasztása", RO: "Selectează dimensiunea tabelului", BG: "Избери размер на таблицата", DA: "Vælg tabelstørrelse", FI: "Valitse taulukon koko", SL: "Izberi velikost tabele" },
  please_select_text_first: { AR: "يرجى تحديد النص أولاً.", DE: "Bitte wählen Sie zuerst den Text aus.", EN: "Please select the text first.", ES: "Por favor, selecciona el texto primero.", FA: "لطفاً ابتدا متن را انتخاب کنید.", FR: "Veuillez d'abord sélectionner le texte.", HI: "कृपया पहले टेक्स्ट का चयन करें।", ID: "Silakan pilih teks terlebih dahulu.", IT: "Si prega di selezionare prima il testo.", JA: "まずテキストを選択してください。", KO: "먼저 텍스트를 선택해 주세요.", SW: "Tafadhali chagua maandishi kwanza.", PL: "Proszę najpierw zaznaczyć tekst.", PT: "Por favor, selecione o texto primeiro.", RU: "Пожалуйста, сначала выделите текст.", VI: "Vui lòng chọn văn bản trước.", TR: "Lütfen önce metni seçin.", UR: "براہ کرم پہلے متن کو منتخب کریں۔", UZ: "Iltimos, avval matnni tanlang.", ZH: "请先选择文本。", NL: "Selecteer eerst de tekst.", SV: "Välj texten först.", EL: "Παρακαλώ επιλέξτε το κείμενο πρώτα.", CS: "Nejprve prosím vyberte text.", HU: "Kérjük, először jelölje ki a szöveget.", RO: "Vă rugăm să selectați mai întâi textul.", BG: "Моля, първо изберете текста.", DA: "Vælg venligst teksten først.", FI: "Valitse teksti ensin.", SL: "Najprej izberite besedilo." },
  add_link: { AR: "إضافة رابط:", DE: "Link hinzufügen:", EN: "Add Link:", ES: "Agregar enlace:", FA: "افزودن لینک:", FR: "Ajouter un lien:", HI: "लिंक जोड़ें:", ID: "Tambahkan tautan:", IT: "Aggiungi link:", JA: "リンクを追加:", KO: "링크 추가:", SW: "Ongeza kiungo:", PL: "Dodaj link:", PT: "Adicionar link:", RU: "Добавить ссылку:", VI: "Thêm liên kết:", TR: "Bağlantı Ekle:", UR: "لنک شامل کریں:", UZ: "Havola qo'shish:", ZH: "添加链接:", NL: "Link toevoegen:", SV: "Lägg till länk:", EL: "Προσθήκη συνδέσμου:", CS: "Přidat odkaz:", HU: "Link hozzáadása:", RO: "Adaugă link:", BG: "Добави връзка:", DA: "Tilføj link:", FI: "Lisää linkki:", SL: "Dodaj povezavo:" },
  data_imported_successfully: { AR: "تم استيراد البيانات بنجاح.", DE: "Daten wurden erfolgreich importiert.", EN: "Data imported successfully.", ES: "Datos importados con éxito.", FA: "داده‌ها با موفقیت وارد شدند.", FR: "Données importées avec succès.", HI: "डेटा सफलतापूर्वक आयात किया गया।", ID: "Data berhasil diimpor.", IT: "Dati importati con successo.", JA: "データが正常にインポートされました。", KO: "데이터가 성공적으로 가져와졌습니다.", SW: "Data zilifanikiwa kuingizwa.", PL: "Dane zostały pomyślnie zaimportowane.", PT: "Dados importados com sucesso.", RU: "Данные успешно импортированы.", VI: "Dữ liệu đã được nhập thành công.", TR: "Veriler başarıyla içe aktarıldı.", UR: "ڈیٹا کامیابی سے درآمد کیا گیا۔", UZ: "Ma'lumotlar muvaffaqiyatli ravishda import qilindi.", ZH: "数据导入成功。", NL: "Gegevens succesvol geïmporteerd.", SV: "Data importerades framgångsrikt.", EL: "Τα δεδομένα εισήχθησαν επιτυχώς.", CS: "Data byla úspěšně importována.", HU: "Az adatok sikeresen importálva.", RO: "Datele au fost importate cu succes.", BG: "Данните бяха успешно импортирани.", DA: "Data importeret succesfuldt.", FI: "Tiedot tuotiin onnistuneesti.", SL: "Podatki so bili uspešno uvoženi." },
  invalid_file_format: { AR: "تنسيق ملف غير صالح.", DE: "Ungültiges Dateiformat.", EN: "Invalid file format.", ES: "Formato de archivo no válido.", FA: "فرمت فایل نامعتبر است.", FR: "Format de fichier non valide.", HI: "अमान्य फ़ाइल प्रारूप.", ID: "Format file tidak valid.", IT: "Formato file non valido.", JA: "無効なファイル形式です。", KO: "잘못된 파일 형식입니다.", SW: "Muundo wa faili si sahihi.", PL: "Nieprawidłowy format pliku.", PT: "Formato de arquivo inválido.", RU: "Неверный формат файла.", VI: "Định dạng tệp không hợp lệ.", TR: "Geçersiz dosya formatı.", UR: "غلط فائل فارمیٹ۔", UZ: "Noto'g'ri fayl formati.", ZH: "无效的文件格式。", NL: "Ongeldig bestandsformaat.", SV: "Ogiltigt filformat.", EL: "Μη έγκυρη μορφή αρχείου.", CS: "Neplatný formát souboru.", HU: "Érvénytelen fájlformátum.", RO: "Format de fișier invalid.", BG: "Невалиден файлов формат.", DA: "Ugyldigt filformat.", FI: "Virheellinen tiedostomuoto.", SL: "Neveljaven format datoteke." },
  category: { AR: "الفئة", DE: "Kategorie", EN: "Category", ES: "Categoría", FA: "دسته", FR: "Catégorie", HI: "श्रेणी", ID: "Kategori", IT: "Categoria", JA: "カテゴリ", KO: "카테고리", SW: "Jamii", PL: "Kategoria", PT: "Categoria", RU: "Категория", VI: "Danh mục", TR: "Kategori", UR: "زمرہ", UZ: "Kategoriya", ZH: "分类", NL: "Categorie", SV: "Kategori", EL: "Κατηγορία", CS: "Kategorie", HU: "Kategória", RO: "Categorie", BG: "Категория", DA: "Kategori", FI: "Kategoria", SL: "Kategorija" },
  task: { AR: "مهمة", DE: "Aufgabe", EN: "Task", ES: "Tarea", FA: "وظیفه", FR: "Tâche", HI: "कार्य", ID: "Tugas", IT: "Compito", JA: "タスク", KO: "작업", SW: "Kazi", PL: "Zadanie", PT: "Tarefa", RU: "Задача", VI: "Nhiệm vụ", TR: "Görev", UR: "ٹاسک", UZ: "Vazifa", ZH: "任务", NL: "Taak", SV: "Uppgift", EL: "Εργασία", CS: "Úkol", HU: "Feladat", RO: "Sarcină", BG: "Задача", DA: "Opgave", FI: "Tehtävä", SL: "Naloga" },
  save: { AR: "حفظ", DE: "Speichern", EN: "Save", ES: "Guardar", FA: "ذخیره", FR: "Enregistrer", HI: "सहेजें", ID: "Simpan", IT: "Salva", JA: "保存", KO: "저장", SW: "Hifadhi", PL: "Zapisz", PT: "Salvar", RU: "Сохранить", VI: "Lưu", TR: "Kaydet", UR: "محفوظ کریں", UZ: "Saqlash", ZH: "保存", NL: "Opslaan", SV: "Spara", EL: "Αποθήκευση", CS: "Uložit", HU: "Mentés", RO: "Salvează", BG: "Запази", DA: "Gem", FI: "Tallenna", SL: "Shrani" },
  search_note: { AR: "ابحث عن ملاحظة", DE: "Notiz suchen", EN: "Search note", ES: "Buscar nota", FA: "یادداشت را جستجو کنید", FR: "Rechercher une note", HI: "नोट खोजें", ID: "Cari catatan", IT: "Cerca nota", JA: "ノートを検索", KO: "노트 검색", SW: "Tafuta kumbukumbu", PL: "Szukaj notatki", PT: "Pesquisar nota", RU: "Поиск заметки", VI: "Tìm kiếm ghi chú", TR: "Not ara", UR: "نوٹ تلاش کریں", UZ: "Eslatmani qidirish", ZH: "搜索笔记", NL: "Zoek notitie", SV: "Sök anteckning", EL: "Αναζήτηση σημείωσης", CS: "Hledat poznámku", HU: "Jegyzet keresése", RO: "Caută notă", BG: "Търси бележка", DA: "Søg note", FI: "Etsi muistiinpano", SL: "Išči opombo" },
  search_in_note_content: { AR: "ابحث في محتوى الملاحظة", DE: "In Notizinhalt suchen", EN: "Search in note content", ES: "Buscar en el contenido de la nota", FA: "در محتوای یادداشت جستجو کنید", FR: "Rechercher dans le contenu de la note", HI: "नोट की सामग्री में खोजें", ID: "Cari di dalam konten catatan", IT: "Cerca nel contenuto della nota", JA: "ノートの内容で検索", KO: "노트 내용에서 검색", SW: "Tafuta ndani ya maudhui ya kumbukumbu", PL: "Szukaj w treści notatki", PT: "Pesquisar no conteúdo da nota", RU: "Поиск в содержании заметки", VI: "Tìm kiếm trong nội dung ghi chú", TR: "Not içeriğinde ara", UR: "نوٹ کے مواد میں تلاش کریں", UZ: "Eslatma matnida qidirish", ZH: "在笔记内容中搜索", NL: "Zoeken in notitie-inhoud", SV: "Sök i anteckningsinnehåll", EL: "Αναζήτηση στο περιεχόμενο της σημείωσης", CS: "Hledat v obsahu poznámky", HU: "Keresés a jegyzet tartalmában", RO: "Caută în conținutul notei", BG: "Търси в съдържанието на бележката", DA: "Søg i noteindhold", FI: "Etsi muistiinpanon sisällöstä", SL: "Išči v vsebini opombe" },
  heading_1: { AR: "العنوان ١", DE: "Überschrift 1", EN: "Heading 1", ES: "Título 1", FA: "سرتیتر 1", FR: "Titre 1", HI: "शीर्षक 1", ID: "Judul 1", IT: "Intestazione 1", JA: "見出し1", KO: "제목 1", SW: "Kichwa 1", PL: "Nagłówek 1", PT: "Título 1", RU: "Заголовок 1", VI: "Tiêu đề 1", TR: "Başlık 1", UR: "عنوان 1", UZ: "Sarlavha 1", ZH: "标题 1", NL: "Kop 1", SV: "Rubrik 1", EL: "Επικεφαλίδα 1", CS: "Nadpis 1", HU: "Címsor 1", RO: "Titlu 1", BG: "Заглавие 1", DA: "Overskrift 1", FI: "Otsikko 1", SL: "Naslov 1" },
  heading_2: { AR: "العنوان ٢", DE: "Überschrift 2", EN: "Heading 2", ES: "Título 2", FA: "سرتیتر 2", FR: "Titre 2", HI: "शीर्षक 2", ID: "Judul 2", IT: "Intestazione 2", JA: "見出し2", KO: "제목 2", SW: "Kichwa 2", PL: "Nagłówek 2", PT: "Título 2", RU: "Заголовок 2", VI: "Tiêu đề 2", TR: "Başlık 2", UR: "عنوان 2", UZ: "Sarlavha 2", ZH: "标题 2", NL: "Kop 2", SV: "Rubrik 2", EL: "Επικεφαλίδα 2", CS: "Nadpis 2", HU: "Címsor 2", RO: "Titlu 2", BG: "Заглавие 2", DA: "Overskrift 2", FI: "Otsikko 2", SL: "Naslov 2" },
  bold: { AR: "غامق", DE: "Fett", EN: "Bold", ES: "Negrita", FA: "درشت", FR: "Gras", HI: "बोल्ड", ID: "Tebal", IT: "Grassetto", JA: "太字", KO: "굵게", SW: "Manane", PL: "Pogrubienie", PT: "Negrito", RU: "Жирный", VI: "Đậm", TR: "Kalın", UR: "کڑا", UZ: "Qalin", ZH: "粗体", NL: "Vet", SV: "Fet", EL: "Έντονα", CS: "Tučné", HU: "Félkövér", RO: "Îngroșat", BG: "Удебелен", DA: "Fed", FI: "Lihavoitu", SL: "Krepko" },
  italic: { AR: "مائل", DE: "Kursiv", EN: "Italic", ES: "Cursiva", FA: "ایتالیک", FR: "Italique", HI: "तिरछा", ID: "Miring", IT: "Corsivo", JA: "斜体", KO: "기울임꼴", SW: "Italiki", PL: "Kursywa", PT: "Itálico", RU: "Курсив", VI: "Nghiêng", TR: "Eğik", UR: "ترچھا", UZ: "Yotiq", ZH: "斜体", NL: "Cursief", SV: "Kursiv", EL: "Πλάγια", CS: "Kurzíva", HU: "Dőlt", RO: "Italic", BG: "Курсив", DA: "Kursiv", FI: "Kursivoitu", SL: "Ležeče" },
  bulleted_list: { AR: "قائمة نقطية", DE: "Aufzählungsliste", EN: "Bulleted list", ES: "Lista con viñetas", FA: "لیست گلوله‌ای", FR: "Liste à puces", HI: "बुलेटेड सूची", ID: "Daftar berpoin", IT: "Elenco puntato", JA: "箇条書きリスト", KO: "글머리 기호 목록", SW: "Orodha ya vitanda", PL: "Lista wypunktowana", PT: "Lista com marcadores", RU: "Маркированный список", VI: "Danh sách đánh dấu", TR: "Madde imli liste", UR: "بلیٹڈ فہرست", UZ: "Belgilangan ro'yxat", ZH: "项目符号列表", NL: "Lijst met opsommingstekens", SV: "Punktlista", EL: "Λίστα με κουκκίδες", CS: "Seznam s odrážkami", HU: "Felsorolás", RO: "Listă cu marcatori", BG: "Списък с точки", DA: "Punktliste", FI: "Luettelomerkitty luettelo", SL: "Seznam z oznakami" },
  numbered_list: { AR: "قائمة مرقمة", DE: "Nummerierte Liste", EN: "Numbered list", ES: "Lista numerada", FA: "لیست شماره‌دار", FR: "Liste numérotée", HI: "संख्यांकित सूची", ID: "Daftar bernomor", IT: "Elenco numerato", JA: "番号付きリスト", KO: "번호 매기기 목록", SW: "Orodha ya namba", PL: "Lista numerowana", PT: "Lista numerada", RU: "Нумерованный список", VI: "Danh sách đánh số", TR: "Numaralı liste", UR: "نمبر دار فہرست", UZ: "Raqamlangan ro'yxat", ZH: "编号列表", NL: "Genummerde lijst", SV: "Nummerlista", EL: "Αριθμημένη λίστα", CS: "Číslovaný seznam", HU: "Számozott lista", RO: "Listă numerotată", BG: "Номериран списък", DA: "Nummereret liste", FI: "Numeroitu luettelo", SL: "Oštevilčen seznam" },
  strikethrough: { AR: "يتوسطه خط", DE: "Durchgestrichen", EN: "Strikethrough", ES: "Tachado", FA: "خط خورده", FR: "Barré", HI: "कटआउट", ID: "Coret", IT: "Barrato", JA: "取り消し線", KO: "취소선", SW: "Mstari wa kuvunjika", PL: "Przekreślenie", PT: "Tachado", RU: "Зачеркнутый", VI: "Gạch ngang", TR: "Üstü çizili", UR: "منقطع لکیر", UZ: "Chizilgan", ZH: "删除线", NL: "Doorstrepen", SV: "Genomstruken", EL: "Διαγραφή", CS: "Přeškrtnuté", HU: "Áthúzott", RO: "Tăiat", BG: "Зачеркнат", DA: "Gennemstreget", FI: "Yliviivattu", SL: "Prečrtano" },
  align_left: { AR: "محاذاة إلى اليسار", DE: "Linksbündig", EN: "Align left", ES: "Alinear a la izquierda", FA: "تراز چپ", FR: "Aligner à gauche", HI: "बाएं से पंक्तिबद्ध करें", ID: "Rata kiri", IT: "Allinea a sinistra", JA: "左揃え", KO: "왼쪽 정렬", SW: "Panga upande wa kushoto", PL: "Wyrównaj do lewej", PT: "Alinhar à esquerda", RU: "Выровнять по левому краю", VI: "Căn trái", TR: "Sola yasla", UR: "بائیں طرف سے پٹی بنانا", UZ: "Chapga tekislash", ZH: "左对齐", NL: "Links uitlijnen", SV: "Vänsterjustera", EL: "Στοίχιση αριστερά", CS: "Zarovnat vlevo", HU: "Balra igazítás", RO: "Aliniază la stânga", BG: "Подравняване вляво", DA: "Venstrejustér", FI: "Tasaa vasemmalle", SL: "Poravnava levo" },
  align_center: { AR: "توسيط", DE: "Zentrieren", EN: "Align center", ES: "Centrar", FA: "تراز وسط", FR: "Centrer", HI: "केंद्र में संरेखित करें", ID: "Rata tengah", IT: "Allinea al centro", JA: "中央揃え", KO: "가운데 정렬", SW: "Panga katikati", PL: "Wyśrodkuj", PT: "Centralizar", RU: "По центру", VI: "Căn giữa", TR: "Ortaya yasla", UR: "مرکز کرنا", UZ: "Markazlash", ZH: "居中对齐", NL: "Centreren", SV: "Centrera", EL: "Στοίχιση στο κέντρο", CS: "Zarovnat na střed", HU: "Középre igazítás", RO: "Centrează", BG: "Центриране", DA: "Centrér", FI: "Keskitä", SL: "Poravnava na sredino" },
  align_right: { AR: "محاذاة إلى اليمين", DE: "Rechtsbündig", EN: "Align right", ES: "Alinear a la derecha", FA: "تراز راست", FR: "Aligner à droite", HI: "दाईं ओर संरेखित करें", ID: "Rata kanan", IT: "Allinea a destra", JA: "右揃え", KO: "오른쪽 정렬", SW: "Panga upande wa kulia", PL: "Wyrównaj do prawej", PT: "Alinhar à direita", RU: "Выровнять по правому краю", VI: "Căn phải", TR: "Sağa yasla", UR: "دائیں طرف سے پٹی بنانا", UZ: "O'ngga tekislash", ZH: "右对齐", NL: "Rechts uitlijnen", SV: "Högerjustera", EL: "Στοίχιση δεξιά", CS: "Zarovnat vpravo", HU: "Jobbra igazítás", RO: "Aliniază la dreapta", BG: "Подравняване вдясно", DA: "Højrejustér", FI: "Tasaa oikealle", SL: "Poravnava desno" },
  remove_formatting: { AR: "إزالة التنسيق", DE: "Formatierung entfernen", EN: "Remove formatting", ES: "Eliminar formato", FA: "حذف فرمت", FR: "Supprimer le formatage", HI: "फ़ॉर्मेटिंग हटाएं", ID: "Hapus pemformatan", IT: "Rimuovi formattazione", JA: "書式を削除", KO: "서식 제거", SW: "Ondoa usimbo", PL: "Usuń formatowanie", PT: "Remover formatação", RU: "Удалить форматирование", VI: "Xóa định dạng", TR: "Biçimlendirmeyi Kaldır", UR: "فارمیٹنگ کو ہٹا دیں", UZ: "Formatlashni olib tashlang", ZH: "清除格式", NL: "Opmaak verwijderen", SV: "Ta bort formatering", EL: "Αφαίρεση μορφοποίησης", CS: "Odstranit formátování", HU: "Formázás eltávolítása", RO: "Elimină formatarea", BG: "Премахни форматирането", DA: "Fjern formatering", FI: "Poista muotoilu", SL: "Odstrani oblikovanje" },
  horizontal_line: { AR: "خط أفقي", DE: "Horizontale Linie", EN: "Horizontal line", ES: "Línea horizontal", FA: "خط افقی", FR: "Ligne horizontale", HI: "क्षैतिज रेखा", ID: "Garis horizontal", IT: "Linea orizzontale", JA: "水平線", KO: "수평선", SW: "Mstari wa usawa", PL: "Linia pozioma", PT: "Linha horizontal", RU: "Горизонтальная линия", VI: "Đường ngang", TR: "Yatay Çizgi", UR: "افقی لکیر", UZ: "Gorizontal chiziq", ZH: "水平线", NL: "Horizontale lijn", SV: "Horisontell linje", EL: "Οριζόντια γραμμή", CS: "Vodorovná čára", HU: "Vízszintes vonal", RO: "Linie orizontală", BG: "Хоризонтална линия", DA: "Vandret linje", FI: "Vaakaviiva", SL: "Vodoravna črta" },
  add_link: { AR: "إضافة رابط", DE: "Link hinzufügen", EN: "Add link", ES: "Agregar enlace", FA: "افزودن لینک", FR: "Ajouter un lien", HI: "लिंक जोड़ें", ID: "Tambahkan tautan", IT: "Aggiungi link", JA: "リンクを追加", KO: "링크 추가", SW: "Ongeza kiungo", PL: "Dodaj link", PT: "Adicionar link", RU: "Добавить ссылку", VI: "Thêm liên kết", TR: "Bağlantı Ekle", UR: "لنک شامل کریں", UZ: "Havola qo'shish", ZH: "添加链接", NL: "Link toevoegen", SV: "Lägg till länk", EL: "Προσθήκη συνδέσμου", CS: "Přidat odkaz", HU: "Link hozzáadása", RO: "Adaugă link", BG: "Добави връзка", DA: "Tilføj link", FI: "Lisää linkki", SL: "Dodaj povezavo" },
  remove_link: { AR: "إزالة الرابط", DE: "Link entfernen", EN: "Remove link", ES: "Eliminar enlace", FA: "حذف لینک", FR: "Supprimer le lien", HI: "लिंक हटाएं", ID: "Hapus tautan", IT: "Rimuovi link", JA: "リンクを削除", KO: "링크 제거", SW: "Ondoa kiungo", PL: "Usuń link", PT: "Remover link", RU: "Удалить ссылку", VI: "Xóa liên kết", TR: "Bağlantıyı Kaldır", UR: "لنک کو ہٹا دیں", UZ: "Havolani olib tashlang", ZH: "移除链接", NL: "Link verwijderen", SV: "Ta bort länk", EL: "Αφαίρεση συνδέσμου", CS: "Odstranit odkaz", HU: "Link eltávolítása", RO: "Elimină linkul", BG: "Премахни връзката", DA: "Fjern link", FI: "Poista linkki", SL: "Odstrani povezavo" },
  add_html: { AR: "إضافة HTML", DE: "HTML hinzufügen", EN: "Add HTML", ES: "Agregar HTML", FA: "افزودن HTML", FR: "Ajouter du HTML", HI: "HTML जोड़ें", ID: "Tambahkan HTML", IT: "Aggiungi HTML", JA: "HTMLを追加", KO: "HTML 추가", SW: "Ongeza HTML", PL: "Dodaj HTML", PT: "Adicionar HTML", RU: "Добавить HTML", VI: "Thêm HTML", TR: "HTML Ekle", UR: "HTML شامل کریں", UZ: "HTML qo'shish", ZH: "添加HTML", NL: "HTML toevoegen", SV: "Lägg till HTML", EL: "Προσθήκη HTML", CS: "Přidat HTML", HU: "HTML hozzáadása", RO: "Adaugă HTML", BG: "Добави HTML", DA: "Tilføj HTML", FI: "Lisää HTML", SL: "Dodaj HTML" },
  add_table: { AR: "إضافة جدول", DE: "Tabelle hinzufügen", EN: "Add table", ES: "Agregar tabla", FA: "افزودن جدول", FR: "Ajouter un tableau", HI: "टेबल जोड़ें", ID: "Tambahkan tabel", IT: "Aggiungi tabella", JA: "表を追加", KO: "표 추가", SW: "Ongeza meza", PL: "Dodaj tabelę", PT: "Adicionar tabela", RU: "Добавить таблицу", VI: "Thêm bảng", TR: "Tablo Ekle", UR: "ٹیبل شامل کریں", UZ: "Jadval qo'shish", ZH: "添加表格", NL: "Tabel toevoegen", SV: "Lägg till tabell", EL: "Προσθήκη πίνακα", CS: "Přidat tabulku", HU: "Táblázat hozzáadása", RO: "Adaugă tabel", BG: "Добави таблица", DA: "Tilføj tabel", FI: "Lisää taulukko", SL: "Dodaj tabelo" },
  select_all: { AR: "تحديد الكل", DE: "Alles auswählen", EN: "Select all", ES: "Seleccionar todo", FA: "انتخاب همه", FR: "Tout sélectionner", HI: "सभी का चयन करें", ID: "Pilih semua", IT: "Seleziona tutto", JA: "すべて選択", KO: "모두 선택", SW: "Chagua zote", PL: "Zaznacz wszystko", PT: "Selecionar tudo", RU: "Выбрать все", VI: "Chọn tất cả", TR: "Tümünü Seç", UR: "سب کو منتخب کریں", UZ: "Hammasini tanlang", ZH: "全选", NL: "Alles selecteren", SV: "Markera alla", EL: "Επιλογή όλων", CS: "Vybrat vše", HU: "Összes kijelölése", RO: "Selectează tot", BG: "Избери всички", DA: "Vælg alle", FI: "Valitse kaikki", SL: "Izberi vse" },
  decrease_font_size: { AR: "تصغير حجم الخط", DE: "Schriftgröße verkleinern", EN: "Decrease font size", ES: "Disminuir tamaño de fuente", FA: "کاهش اندازه فونت", FR: "Réduire la taille de la police", HI: "फ़ॉन्ट आकार घटाएं", ID: "Perkecil ukuran font", IT: "Diminuisci dimensione carattere", JA: "フォントサイズを縮小", KO: "글꼴 크기 줄이기", SW: "Punguza saizi ya fonti", PL: "Zmniejsz rozmiar czcionki", PT: "Diminuir tamanho da fonte", RU: "Уменьшить размер шрифта", VI: "Giảm cỡ chữ", TR: "Fontu Küçült", UR: "فونٹ کا سائز چھوٹا کریں", UZ: "Shrift o'lchamini kamaytirish", ZH: "减小字体大小", NL: "Lettergrootte verkleinen", SV: "Minska teckenstorlek", EL: "Μείωση μεγέθους γραμματοσειράς", CS: "Zmenšit velikost písma", HU: "Betűméret csökkentése", RO: "Micșorează dimensiunea fontului", BG: "Намали размера на шрифта", DA: "Formindsk skriftstørrelse", FI: "Pienennä fonttikokoa", SL: "Zmanjšaj velikost pisave" },
  increase_font_size: { AR: "تكبير حجم الخط", DE: "Schriftgröße vergrößern", EN: "Increase font size", ES: "Aumentar tamaño de fuente", FA: "افزایش اندازه فونت", FR: "Augmenter la taille de la police", HI: "फ़ॉन्ट आकार बढ़ाएं", ID: "Perbesar ukuran font", IT: "Aumenta dimensione carattere", JA: "フォントサイズを拡大", KO: "글꼴 크기 늘리기", SW: "Ongeza saizi ya fonti", PL: "Zwiększ rozmiar czcionki", PT: "Aumentar tamanho da fonte", RU: "Увеличить размер шрифта", VI: "Tăng cỡ chữ", TR: "Fontu Büyüt", UR: "فونٹ کا سائز بڑھا دیں", UZ: "Shrift o'lchamini oshirish", ZH: "增大字体大小", NL: "Lettergrootte vergroten", SV: "Öka teckenstorlek", EL: "Αύξηση μεγέθους γραμματοσειράς", CS: "Zvětšit velikost písma", HU: "Betűméret növelése", RO: "Mărește dimensiunea fontului", BG: "Увеличи размера на шрифта", DA: "Forøg skriftstørrelse", FI: "Suurenna fonttikokoa", SL: "Povečaj velikost pisave" },
  undo: { AR: "تراجع", DE: "Rückgängig", EN: "Undo", ES: "Deshacer", FA: "واگرد", FR: "Annuler", HI: "पूर्ववत करें", ID: "Urungkan", IT: "Annulla", JA: "元に戻す", KO: "되돌리기", SW: "Tengua", PL: "Cofnij", PT: "Desfazer", RU: "Отменить", VI: "Hoàn tác", TR: "Geri al", UR: "واپس کریں", UZ: "Bekor qilish", ZH: "撤销", NL: "Ongedaan maken", SV: "Ångra", EL: "Αναίρεση", CS: "Zpět", HU: "Visszavonás", RO: "Anulează", BG: "Отмени", DA: "Fortryd", FI: "Kumoa", SL: "Razveljavi" },
  redo: { AR: "إعادة", DE: "Wiederholen", EN: "Redo", ES: "Rehacer", FA: "مجدد", FR: "Rétablir", HI: "फिर से करें", ID: "Ulangi", IT: "Ripeti", JA: "やり直す", KO: "다시 실행", SW: "Fanya tena", PL: "Ponów", PT: "Refazer", RU: "Повторить", VI: "Làm lại", TR: "İleri al", UR: "دوبارہ کریں", UZ: "Qayta bajaring", ZH: "重做", NL: "Opnieuw doen", SV: "Gör om", EL: "Επανάληψη", CS: "Znovu", HU: "Újra", RO: "Refă", BG: "Повтори", DA: "Gentag", FI: "Tee uudelleen", SL: "Ponovno izvedi" },
  select_language: { AR: "اختر اللغة", DE: "Sprache auswählen", EN: "Select language", ES: "Seleccionar idioma", FA: "زبان را انتخاب کنید", FR: "Sélectionnez la langue", HI: "भाषा चुनें", ID: "Pilih bahasa", IT: "Seleziona lingua", JA: "言語を選択", KO: "언어 선택", SW: "Chagua lugha", PL: "Wybierz język", PT: "Selecionar idioma", RU: "Выбрать язык", VI: "Chọn ngôn ngữ", TR: "Dil seç", UR: "زبان منتخب کریں", UZ: "Tilni tanlang", ZH: "选择语言", NL: "Taal selecteren", SV: "Välj språk", EL: "Επιλογή γλώσσας", CS: "Vybrat jazyk", HU: "Nyelv kiválasztása", RO: "Selectează limba", BG: "Избери език", DA: "Vælg sprog", FI: "Valitse kieli", SL: "Izberi jezik" },
  save_all_data: { AR: "احفظ جميع البيانات", DE: "Alle Daten speichern", EN: "Save all data", ES: "Guardar todos los datos", FA: "تمام داده‌ها را ذخیره کنید", FR: "Enregistrer toutes les données", HI: "सभी डेटा सहेजें", ID: "Simpan semua data", IT: "Salva tutti i dati", JA: "すべてのデータを保存", KO: "모든 데이터 저장", SW: "Hifadhi data zote", PL: "Zapisz wszystkie dane", PT: "Salvar todos os dados", RU: "Сохранить все данные", VI: "Lưu tất cả dữ liệu", TR: "Tüm verileri kaydet", UR: "تمام ڈیٹا محفوظ کریں", UZ: "Barcha ma'lumotlarni saqlang", ZH: "保存所有数据", NL: "Alle gegevens opslaan", SV: "Spara all data", EL: "Αποθήκευση όλων των δεδομένων", CS: "Uložit všechna data", HU: "Minden adat mentése", RO: "Salvează toate datele", BG: "Запази всички данни", DA: "Gem alle data", FI: "Tallenna kaikki tiedot", SL: "Shrani vse podatke" },
  upload_data: { AR: "تحميل البيانات", DE: "Daten hochladen", EN: "Upload data", ES: "Subir datos", FA: "بارگذاری داده‌ها", FR: "Téléverser des données", HI: "डेटा अपलोड करें", ID: "Unggah data", IT: "Carica dati", JA: "データをアップロード", KO: "데이터 업로드", SW: "Pakia data", PL: "Prześlij dane", PT: "Carregar dados", RU: "Загрузить данные", VI: "Tải lên dữ liệu", TR: "Verileri yükle", UR: "ڈیٹا اپ لوڈ کریں", UZ: "Ma'lumotlarni yuklash", ZH: "上传数据", NL: "Gegevens uploaden", SV: "Ladda upp data", EL: "Ανέβασμα δεδομένων", CS: "Nahrát data", HU: "Adatok feltöltése", RO: "Încarcă date", BG: "Качи данни", DA: "Upload data", FI: "Lataa tiedot", SL: "Naloži podatke" },
  reading_mode: { AR: "وضع القراءة", DE: "Lesemodus", EN: "Reading mode", ES: "Modo de lectura", FA: "حالت خواندن", FR: "Mode lecture", HI: "रीडिंग मोड", ID: "Mode membaca", IT: "Modalità lettura", JA: "リーディングモード", KO: "읽기 모드", SW: "Mpango wa kusoma", PL: "Tryb czytania", PT: "Modo de leitura", RU: "Режим чтения", VI: "Chế độ đọc", TR: "Okuma modu", UR: "پڑھنے کا طریقہ", UZ: "O'qish rejimi", ZH: "阅读模式", NL: "Leesmodus", SV: "Läsläge", EL: "Λειτουργία ανάγνωσης", CS: "Režim čtení", HU: "Olvasási mód", RO: "Mod de citire", BG: "Режим на четене", DA: "Læsetilstand", FI: "Lukutila", SL: "Način branja" },
  today: { AR: "اليوم", DE: "Heute", EN: "Today", ES: "Hoy", FA: "امروز", FR: "Aujourd'hui", HI: "आज", ID: "Hari ini", IT: "Oggi", JA: "今日", KO: "오늘", SW: "Leo", PL: "Dzisiaj", PT: "Hoje", RU: "Сегодня", VI: "Hôm nay", TR: "Bugün", UR: "آج", UZ: "Bugun", ZH: "今天", NL: "Vandaag", SV: "Idag", EL: "Σήμερα", CS: "Dnes", HU: "Ma", RO: "Astăzi", BG: "Днес", DA: "I dag", FI: "Tänään", SL: "Danes" },
  tomorrow: { AR: "غدًا", DE: "Morgen", EN: "Tomorrow", ES: "Mañana", FA: "فردا", FR: "Demain", HI: "कल", ID: "Besok", IT: "Domani", JA: "明日", KO: "내일", SW: "Kesho", PL: "Jutro", PT: "Amanhã", RU: "Завтра", VI: "Ngày mai", TR: "Yarın", UR: "کل", UZ: "Ertaga", ZH: "明天", NL: "Morgen", SV: "I morgon", EL: "Αύριο", CS: "Zítra", HU: "Holnap", RO: "Mâine", BG: "Утре", DA: "I morgen", FI: "Huomenna", SL: "Jutri" },
  theme: { AR: "السمة", DE: "Thema", EN: "Theme", ES: "Tema", FA: "تم", FR: "Thème", HI: "थीम", ID: "Tema", IT: "Tema", JA: "テーマ", KO: "테마", SW: "Mada", PL: "Motyw", PT: "Tema", RU: "Тема", VI: "Chủ đề", TR: "Tema", UR: "تھیم", UZ: "Mavzu", ZH: "主题", NL: "Thema", SV: "Tema", EL: "Θέμα", CS: "Motiv", HU: "Téma", RO: "Temă", BG: "Тема", DA: "Tema", FI: "Teema", SL: "Tema" },
  sync: { AR: "مزامنة", DE: "Synchronisieren", EN: "Sync", ES: "Sincronizar", FA: "همگام‌سازی", FR: "Synchroniser", HI: "सिंक", ID: "Sinkronisasi", IT: "Sincronizza", JA: "同期", KO: "동기화", SW: "Usawa", PL: "Synchronizuj", PT: "Sincronizar", RU: "Синхронизация", VI: "Đồng bộ", TR: "Senkronizasyon", UR: "مطابقت", UZ: "Sinxronizatsiya", ZH: "同步", NL: "Synchroniseren", SV: "Synkronisera", EL: "Συγχρονισμός", CS: "Synchronizovat", HU: "Szinkronizálás", RO: "Sincronizare", BG: "Синхронизация", DA: "Synkroniser", FI: "Synkronoi", SL: "Sinhronizacija" },
  back: { AR: "رجوع", DE: "Zurück", EN: "Back", ES: "Atrás", FA: "بازگشت", FR: "Retour", HI: "वापस", ID: "Kembali", IT: "Indietro", JA: "戻る", KO: "뒤로", SW: "Nyuma", PL: "Wstecz", PT: "Voltar", RU: "Назад", VI: "Quay lại", TR: "Geri", UR: "پیچھے", UZ: "Orqaga", ZH: "返回", NL: "Terug", SV: "Tillbaka", EL: "Πίσω", CS: "Zpět", HU: "Vissza", RO: "Înapoi", BG: "Назад", DA: "Tilbage", FI: "Takaisin", SL: "Nazaj" },
  are_you_sure_delete_task: { AR: "هل أنت متأكد أنك تريد حذف هذه المهمة؟", DE: "Sind Sie sicher, dass Sie diese Aufgabe löschen möchten?", EN: "Are you sure you want to delete this task?", ES: "¿Estás seguro de que quieres eliminar esta tarea?", FA: "آیا مطمئنید که می‌خواهید این وظیفه را حذف کنید؟", FR: "Êtes-vous sûr de vouloir supprimer cette tâche ?", HI: "क्या आप वाकई इस कार्य को हटाना चाहते हैं?", ID: "Apakah Anda yakin ingin menghapus tugas ini?", IT: "Sei sicuro di voler eliminare questo compito?", JA: "このタスクを削除してもよろしいですか？", KO: "이 작업을 삭제하시겠습니까?", SW: "Je, una uhakika unataka kufuta kazi hii?", PL: "Czy na pewno chcesz usunąć to zadanie?", PT: "Tem certeza de que deseja excluir esta tarefa?", RU: "Вы уверены, что хотите удалить эту задачу?", VI: "Bạn có chắc chắn muốn xóa nhiệm vụ này không?", TR: "Bu görevi silmek istediğinize emin misiniz?", UR: "کیا آپ واقعی طور پر یہ ٹاسک حذف کرنا چاہتے ہیں؟", UZ: "Ushbu vazifani o'chirishni xohlaysizmi?", ZH: "你确定要删除这个任务吗？", NL: "Weet je zeker dat je deze taak wilt verwijderen?", SV: "Är du säker på att du vill ta bort denna uppgift?", EL: "Είστε σίγουροι ότι θέλετε να διαγράψετε αυτήν την εργασία;", CS: "Jste si jisti, že chcete tento úkol smazat?", HU: "Biztosan törölni szeretné ezt a feladatot?", RO: "Ești sigur că vrei să ștergi această sarcină?", BG: "Сигурни ли сте, че искате да изтриете тази задача?", DA: "Er du sikker på, at du vil slette denne opgave?", FI: "Haluatko varmasti poistaa tämän tehtävän?", SL: "Ali ste prepričani, da želite izbrisati to nalogo?" },
  active: { AR: "نشط", DE: "Aktiv", EN: "Active", ES: "Activo", FA: "فعال", FR: "Actif", HI: "सक्रिय", ID: "Aktif", IT: "Attivo", JA: "アクティブ", KO: "활성", SW: "Anwani", PL: "Aktywny", PT: "Ativo", RU: "Активный", VI: "Hoạt động", TR: "Aktif", UR: "فعال", UZ: "Faol", ZH: "活跃", NL: "Actief", SV: "Aktiv", EL: "Ενεργό", CS: "Aktivní", HU: "Aktív", RO: "Activ", BG: "Активен", DA: "Aktiv", FI: "Aktiivinen", SL: "Aktivno" },
  overdue: { AR: "متأخر", DE: "Überfällig", EN: "Overdue", ES: "Atrasado", FA: "دیرکرد", FR: "En retard", HI: "विलंबित", ID: "Terlambat", IT: "Scaduto", JA: "期限切れ", KO: "지연된", SW: "Takwimu zilizopita", PL: "Przeterminowany", PT: "Atrasado", RU: "Просроченный", VI: "Quá hạn", TR: "Geciken", UR: "معطل", UZ: "Kechikkan", ZH: "过期", NL: "Te laat", SV: "Försenad", EL: "Εκπρόθεσμο", CS: "Zpožděný", HU: "Késedelmes", RO: "Întârziat", BG: "Просрочен", DA: "Forsinket", FI: "Myöhässä", SL: "Prepozno" },
  completed: { AR: "مكتمل", DE: "Abgeschlossen", EN: "Completed", ES: "Completado", FA: "تکمیل شده", FR: "Terminé", HI: "पूर्ण", ID: "Selesai", IT: "Completato", JA: "完了", KO: "완료됨", SW: "Imekamilika", PL: "Ukończony", PT: "Concluído", RU: "Завершено", VI: "Đã hoàn thành", TR: "Tamamlanmış", UR: "مکمل", UZ: "Tugallangan", ZH: "已完成", NL: "Voltooid", SV: "Avslutad", EL: "Ολοκληρωμένο", CS: "Dokončeno", HU: "Befejezett", RO: "Finalizat", BG: "Завършен", DA: "Afsluttet", FI: "Valmis", SL: "Končano" },
  delete_all: { AR: "حذف الكل", DE: "Alles löschen", EN: "Delete All", ES: "Eliminar todo", FA: "حذف همه", FR: "Tout supprimer", HI: "सभी हटाएं", ID: "Hapus semua", IT: "Elimina tutto", JA: "すべて削除", KO: "모두 삭제", SW: "Futa yote", PL: "Usuń wszystko", PT: "Excluir tudo", RU: "Удалить все", VI: "Xóa tất cả", TR: "Tümünü Sil", UR: "سب مٹا دیں", UZ: "Hammasini o'chirish", ZH: "删除全部", NL: "Alles verwijderen", SV: "Radera allt", EL: "Διαγραφή όλων", CS: "Smazat vše", HU: "Minden törlése", RO: "Șterge tot", BG: "Изтрий всичко", DA: "Slet alt", FI: "Poista kaikki", SL: "Izbriši vse" },
  are_you_sure_delete_all_completed_tasks: { AR: "هل أنت متأكد أنك تريد حذف جميع المهام المكتملة؟", DE: "Sind Sie sicher, dass Sie alle abgeschlossenen Aufgaben löschen möchten?", EN: "Are you sure you want to delete all completed tasks?", ES: "¿Estás seguro de que quieres eliminar todas las tareas completadas?", FA: "آیا مطمئنید که می‌خواهید همه وظایف تکمیل شده را حذف کنید؟", FR: "Êtes-vous sûr de vouloir supprimer toutes les tâches terminées ?", HI: "क्या आप वाकई सभी पूर्ण कार्यों को हटाना चाहते हैं?", ID: "Apakah Anda yakin ingin menghapus semua tugas yang telah selesai?", IT: "Sei sicuro di voler eliminare tutte le attività completate?", JA: "すべての完了したタスクを削除してもよろしいですか？", KO: "모든 완료된 작업을 삭제하시겠습니까?", SW: "Je, una uhakika unataka kufuta kazi zote zilizokamilika?", PL: "Czy na pewno chcesz usunąć wszystkie ukończone zadania?", PT: "Tem certeza de que deseja excluir todas as tarefas concluídas?", RU: "Вы уверены, что хотите удалить все завершенные задачи?", VI: "Bạn có chắc chắn muốn xóa tất cả các nhiệm vụ đã hoàn thành không?", TR: "Tüm tamamlanmış görevleri silmek istediğinize emin misiniz?", UR: "کیا آپ واقعی طور پر تمام مکمل ہوئے کام حذف کرنا چاہتے ہیں؟", UZ: "Barcha tugallangan vazifalarni o'chirishni xohlaysizmi?", ZH: "你确定要删除所有已完成的任务吗？", NL: "Weet je zeker dat je alle voltooide taken wilt verwijderen?", SV: "Är du säker på att du vill radera alla slutförda uppgifter?", EL: "Είστε σίγουροι ότι θέλετε να διαγράψετε όλες τις ολοκληρωμένες εργασίες;", CS: "Jste si jisti, že chcete smazat všechny dokončené úkoly?", HU: "Biztosan törölni szeretné az összes befejezett feladatot?", RO: "Ești sigur că vrei să ștergi toate sarcinile finalizate?", BG: "Сигурни ли сте, че искате да изтриете всички завършени задачи?", DA: "Er du sikker på, at du vil slette alle fuldførte opgaver?", FI: "Haluatko varmasti poistaa kaikki valmiit tehtävät?", SL: "Ali ste prepričani, da želite izbrisati vse dokončane naloge?" },
  add_subtask: { AR: "إضافة مهمة فرعية", DE: "Unteraufgabe hinzufügen", EN: "Add Subtask", ES: "Agregar subtarea", FA: "اضافه کردن زیروظیفه", FR: "Ajouter une sous-tâche", HI: "उपकार्य जोड़ें", ID: "Tambah sub-tugas", IT: "Aggiungi sottoattività", JA: "サブタスクを追加", KO: "하위 작업 추가", SW: "Ongeza kazi ndogo", PL: "Dodaj podzadanie", PT: "Adicionar subtarefa", RU: "Добавить подзадачу", VI: "Thêm nhiệm vụ phụ", TR: "Alt Görev Ekle", UR: "ذیلی کام شامل کریں", UZ: "Pastki vazifa qo'shish", ZH: "添加子任务", NL: "Subtaak toevoegen", SV: "Lägg till underuppgift", EL: "Προσθήκη υποεργασίας", CS: "Přidat podúkol", HU: "Alfeladat hozzáadása", RO: "Adaugă subsarcină", BG: "Добави подзадача", DA: "Tilføj underopgave", FI: "Lisää alitehtävä", SL: "Dodaj podnalogo" },
  what_to_do: { AR: "ماذا ستفعل\u061f", DE: "Was ist zu tun?", EN: "What to do?", ES: "¿Qué hacer?", FA: "چه کاری انجام دهید\u061f", FR: "Qu'est-ce qu'il faut faire ?", HI: "क्या करना है?", ID: "Apa yang harus dilakukan?", IT: "Cosa fare?", JA: "何をしますか？", KO: "무엇을 할까요?", SW: "Je, kitu kifanyike vipi?", PL: "Co zrobić?", PT: "O que fazer?", RU: "Что нужно сделать?", VI: "Cần làm gì?", TR: "Ne yapılacak?", UR: "کیا کرنا ہے\u061f", UZ: "Nima qilish kerak?", ZH: "要做什么？", NL: "Wat te doen?", SV: "Vad ska jag göra?", EL: "Τι να κάνω;", CS: "Co udělat?", HU: "Mit kell tenni?", RO: "Ce să fac?", BG: "Какво да правя?", DA: "Hvad skal jeg gøre?", FI: "Mitä tehdä?", SL: "Kaj storiti?" },
  task_name_cannot_be_empty: { AR: "اسم المهمة لا يمكن أن يكون فارغًا.", DE: "Der Aufgabenname darf nicht leer sein.", EN: "Task name cannot be empty.", ES: "El nombre de la tarea no puede estar vacío.", FA: "نام وظیفه نمی‌تواند خالی باشد.", FR: "Le nom de la tâche ne peut pas être vide.", HI: "कार्य का नाम खाली नहीं हो सकता।", ID: "Nama tugas tidak boleh kosong.", IT: "Il nome del compito non può essere vuoto.", JA: "タスク名を空にすることはできません。", KO: "작업 이름은 비워둘 수 없습니다.", SW: "Jina la kazi halitakiwi kuwa tupu.", PL: "Nazwa zadania nie może być pusta.", PT: "O nome da tarefa não pode estar vazio.", RU: "Название задачи не может быть пустым.", VI: "Tên nhiệm vụ không thể để trống.", TR: "Görev adı boş bırakılamaz.", UR: "کام کا نام خالی نہیں ہو سکتا۔", UZ: "Vazifa nomi bo'sh bo'lishi mumkin emas.", ZH: "任务名称不能为空。", NL: "Taaknaam mag niet leeg zijn.", SV: "Uppgiftsnamnet får inte vara tomt.", EL: "Το όνομα της εργασίας δεν μπορεί να είναι κενό.", CS: "Název úkolu nesmí být prázdný.", HU: "A feladat neve nem lehet üres.", RO: "Numele sarcinii nu poate fi gol.", BG: "Името на задачата не може да бъде празно.", DA: "Opgavenavnet må ikke være tomt.", FI: "Tehtävän nimi ei voi olla tyhjä.", SL: "Ime naloge ne sme biti prazno." },
  installation_steps: { AR: "خطوات التثبيت", DE: "Installationsschritte", EN: "Installation Steps", ES: "Pasos de instalación", FA: "مراحل نصب", FR: "Étapes d'installation", HI: "स्थापना के चरण", ID: "Langkah-langkah instalasi", IT: "Passaggi di installazione", JA: "インストール手順", KO: "설치 단계", SW: "Hatua za usanidi", PL: "Kroki instalacji", PT: "Etapas de instalação", RU: "Шаги установки", VI: "Các bước cài đặt", TR: "Kurulum Adımları", UR: "نصب کے مراحل", UZ: "O'rnatish bosqichlari", ZH: "安装步骤", NL: "Installatiestappen", SV: "Installationssteg", EL: "Βήματα εγκατάστασης", CS: "Instalační kroky", HU: "Telepítési lépések", RO: "Pași de instalare", BG: "Стъпки за инсталация", DA: "Installations trin", FI: "Asennusvaiheet", SL: "Koraki namestitve" },
  create_github_account: { AR: "أولاً، قم بإنشاء حساب على GitHub:", DE: "Erstellen Sie zunächst ein GitHub-Konto:", EN: "First, create a GitHub account:", ES: "Primero, crea una cuenta en GitHub:", FA: "اول، یک حساب گیت‌هاب ایجاد کنید:", FR: "Tout d'abord, créez un compte GitHub :", HI: "सबसे पहले, एक GitHub खाता बनाएं:", ID: "Pertama, buat akun GitHub:", IT: "Prima di tutto, crea un account GitHub:", JA: "まず、GitHubアカウントを作成してください:", KO: "먼저 GitHub 계정을 만드세요:", SW: "Kwanza, unda akaunti ya GitHub:", PL: "Najpierw utwórz konto na GitHub:", PT: "Primeiro, crie uma conta no GitHub:", RU: "Сначала создайте учетную запись на GitHub:", VI: "Đầu tiên, tạo một tài khoản GitHub:", TR: "Önce bir GitHub hesabı oluşturun:", UR: "سب سے پہلے، جیٹھب اکاؤنٹ بنائیں:", UZ: "Avval GitHub hisobini yarating:", ZH: "首先，创建一个GitHub帐户:", NL: "Maak eerst een GitHub-account aan:", SV: "Skapa först ett GitHub-konto:", EL: "Πρώτα, δημιουργήστε έναν λογαριασμό στο GitHub:", CS: "Nejprve si vytvořte účet na GitHubu:", HU: "Először hozzon létre egy GitHub-fiókot:", RO: "Mai întâi, creează un cont GitHub:", BG: "Първо, създайте акаунт в GitHub:", DA: "Opret først en GitHub-konto:", FI: "Luo ensin GitHub-tili:", SL: "Najprej ustvarite račun na GitHubu:" },
  open_app_creation_page: { AR: "ثم افتح صفحة إنشاء التطبيق:", DE: "Öffnen Sie dann die App-Erstellungsseite:", EN: "Then open the app creation page:", ES: "Luego abre la página de creación de la aplicación:", FA: "سپس صفحه ایجاد برنامه را باز کنید:", FR: "Ensuite, ouvrez la page de création de l'application :", HI: "फिर ऐप निर्माण पृष्ठ खोलें:", ID: "Kemudian buka halaman pembuatan aplikasi:", IT: "Quindi apri la pagina di creazione dell'applicazione:", JA: "次に、アプリ作成ページを開きます:", KO: "그런 다음 앱 생성 페이지를 엽니다:", SW: "Kisha fungua ukurasa wa kuunda programu:", PL: "Następnie otwórz stronę tworzenia aplikacji:", PT: "Em seguida, abra a página de criação do aplicativo:", RU: "Затем откройте страницу создания приложения:", VI: "Sau đó mở trang tạo ứng dụng:", TR: "Sonra uygulama oluşturma sayfasını açın:", UR: "پھر ایپ تخلیق صفحہ کھولیں:", UZ: "Keyin ilova yaratish sahifasini oching:", ZH: "然后打开应用程序创建页面:", NL: "Open dan de app-aanmaakpagina:", SV: "Öppna sedan sidan för att skapa appen:", EL: "Στη συνέχεια, ανοίξτε τη σελίδα δημιουργίας εφαρμογής:", CS: "Poté otevřete stránku pro vytvoření aplikace:", HU: "Ezután nyissa meg az alkalmazás létrehozási oldalt:", RO: "Apoi deschide pagina de creare a aplicației:", BG: "След това отворете страницата за създаване на приложение:", DA: "Åbn derefter siden til oprettelse af appen:", FI: "Avaa sitten sovelluksen luontisivu:", SL: "Nato odprite stran za ustvarjanje aplikacije:" },
  select_personal_access_tokens: { AR: "في الجانب الأيسر، حدد خيار 'Personal access tokens' داخل قسم 'Tokens (classic)'.", DE: "Wählen Sie auf der linken Seite die Option 'Personal access tokens' im Abschnitt 'Tokens (classic)' aus.", EN: "On the left side, select the 'Personal access tokens' option inside the 'Tokens (classic)' section.", ES: "En el lado izquierdo, seleccione la opción 'Personal access tokens' dentro de la sección 'Tokens (classic)'.", FA: "در سمت چپ، گزینه 'Personal access tokens' را در بخش 'Tokens (classic)' انتخاب کنید.", FR: "Sur le côté gauche, sélectionnez l'option 'Personal access tokens' dans la section 'Tokens (classic)'.", HI: "बाईं ओर, 'Tokens (classic)' खंड के अंदर 'Personal access tokens' विकल्प चुनें।", ID: "Di sisi kiri, pilih opsi 'Personal access tokens' di dalam bagian 'Tokens (classic)'.", IT: "Sul lato sinistro, seleziona l'opzione 'Personal access tokens' all'interno della sezione 'Tokens (classic)'.", JA: "左側で、'Tokens (classic)' セクション内の 'Personal access tokens' オプションを選択します。", KO: "왼쪽에서 'Tokens (classic)' 섹션 내의 'Personal access tokens' 옵션을 선택합니다.", SW: "Upande wa kushoto, chagua chaguo la 'Personal access tokens' ndani ya sehemu ya 'Tokens (classic)'.", PL: "Po lewej stronie wybierz opcję 'Personal access tokens' w sekcji 'Tokens (classic)'.", PT: "No lado esquerdo, selecione a opção 'Personal access tokens' dentro da seção 'Tokens (classic)'.", RU: "Слева выберите опцию 'Personal access tokens' в разделе 'Tokens (classic)'.", VI: "Ở bên trái, chọn tùy chọn 'Personal access tokens' bên trong phần 'Tokens (classic)'.", TR: "Sol tarafta, 'Personal access tokens' seçeneğinin içindeki 'Tokens (classic)' kısmını seçin.", UR: "بائیں جانب، 'Tokens (classic)' حصے کے اندر 'Personal access tokens' آپشن منتخب کریں۔", UZ: "Chap tomonda, 'Tokens (classic)' bo'limidagi 'Personal access tokens' ni tanlang.", ZH: "在左侧，选择'Tokens (classic)'部分中的'Personal access tokens'选项。", NL: "Selecteer aan de linkerkant de optie 'Personal access tokens' in de sectie 'Tokens (classic)'.", SV: "Välj alternativet 'Personal access tokens' på vänster sida i sektionen 'Tokens (classic)'.", EL: "Στην αριστερή πλευρά, επιλέξτε την επιλογή 'Personal access tokens' μέσα στην ενότητα 'Tokens (classic)'.", CS: "Na levé straně vyberte možnost 'Personal access tokens' v sekci 'Tokens (classic)'.", HU: "A bal oldalon válassza a 'Personal access tokens' opciót a 'Tokens (classic)' részen belül.", RO: "Pe partea stângă, selectează opțiunea 'Personal access tokens' din secțiunea 'Tokens (classic)'.", BG: "От лявата страна изберете опцията 'Personal access tokens' в раздела 'Tokens (classic)'.", DA: "På venstre side vælg muligheden 'Personal access tokens' inde i afsnittet 'Tokens (classic)'.", FI: "Valitse vasemmalta puolelta 'Personal access tokens' -vaihtoehto 'Tokens (classic)' -osiossa.", SL: "Na levi strani izberite možnost 'Personal access tokens' znotraj razdelka 'Tokens (classic)'." },
  click_generate_new_token: { AR: "انقر فوق زر 'Generate new token (classic)'.", DE: "Klicken Sie auf die Schaltfläche 'Generate new token (classic)'.", EN: "Click the 'Generate new token (classic)' button.", ES: "Haz clic en el botón 'Generate new token (classic)'.", FA: "روی دکمه 'Generate new token (classic)' کلیک کنید.", FR: "Cliquez sur le bouton 'Generate new token (classic)'.", HI: "'Generate new token (classic)' बटन पर क्लिक करें।", ID: "Klik tombol 'Generate new token (classic)'.", IT: "Fai clic sul pulsante 'Generate new token (classic)'.", JA: "「Generate new token (classic)」ボタンをクリックします。", KO: "'Generate new token (classic)' 버튼을 클릭합니다.", SW: "Bofya kifungo cha 'Generate new token (classic)'.", PL: "Kliknij przycisk 'Generate new token (classic)'.", PT: "Clique no botão 'Generate new token (classic)'.", RU: "Нажмите кнопку 'Generate new token (classic)'.", VI: "Nhấn vào nút 'Generate new token (classic)'.", TR: "'Generate new token (classic)' butonuna tıklayın.", UR: "'Generate new token (classic)' بٹن پر کلک کریں۔", UZ: "'Generate new token (classic)' tugmasini bosing.", ZH: "点击“Generate new token (classic)”按钮。", NL: "Klik op de knop 'Generate new token (classic)'.", SV: "Klicka på knappen 'Generate new token (classic)'.", EL: "Κάντε κλικ στο κουμπί 'Generate new token (classic)'.", CS: "Klikněte na tlačítko 'Generate new token (classic)'.", HU: "Kattintson a 'Generate new token (classic)' gombra.", RO: "Apasă pe butonul 'Generate new token (classic)'.", BG: "Кликнете върху бутона 'Generate new token (classic)'.", DA: "Klik på knappen 'Generate new token (classic)'.", FI: "Napsauta 'Generate new token (classic)' -painiketta.", SL: "Kliknite na gumb 'Generate new token (classic)'." },
  name_your_token: { AR: "أعطِ الاسم لرمزك (على سبيل المثال، 'عمليات Gist').", DE: "Geben Sie Ihrem Token einen Namen (z. B. 'Gist-Operationen').", EN: "Name your token (e.g., 'Gist operations').", ES: "Asigne un nombre a su token (por ejemplo, 'Operaciones de Gist').", FA: "برای توکن خود یک نام انتخاب کنید (به عنوان مثال، 'عملیات Gist').", FR: "Nommez votre jeton (par exemple, 'Opérations Gist').", HI: "अपने टोकन का नाम दें (उदाहरण के लिए, 'Gist ऑपरेशन').", ID: "Berikan nama untuk token Anda (misalnya, 'Operasi Gist').", IT: "Dai un nome al tuo token (ad esempio, 'Operazioni Gist').", JA: "トークンに名前を付けます（例: 'Gist 操作'）。", KO: "토큰에 이름을 지정하세요 (예: 'Gist 작업').", SW: "Jina la funguo lako (kwa mfano, 'Shughuli za Gist').", PL: "Nazwij swój token (np. 'Operacje Gist').", PT: "Dê um nome ao seu token (por exemplo, 'Operações Gist').", RU: "Назовите ваш токен (например, 'Операции Gist').", VI: "Đặt tên cho token của bạn (ví dụ: 'Hoạt động Gist').", TR: "Token'ınıza bir ad verin (örneğin, 'Gist işlemleri').", UR: "اپنے ٹوکن کو نام دیں (مثال کے طور پر، 'Gist عملیات').", UZ: "Tokeningizga nom bering (masalan, 'Gist operatsiyalari').", ZH: "为您的令牌命名（例如，“Gist操作”）。", NL: "Geef je token een naam (bijv. 'Gist-operaties').", SV: "Namnge din token (t.ex. 'Gist-operationer').", EL: "Ονομάστε το token σας (π.χ. 'Λειτουργίες Gist').", CS: "Pojmenujte svůj token (např. 'Operace Gist').", HU: "Nevezze el a tokenjét (pl. 'Gist műveletek').", RO: "Denumiți-vă token-ul (de ex. 'Operațiuni Gist').", BG: "Дайте име на вашия токен (напр. 'Операции с Gist').", DA: "Navngiv din token (f.eks. 'Gist-operationer').", FI: "Nimeä tokenisi (esim. 'Gist-toiminnot').", SL: "Poimenujte svoj žeton (npr. 'Operacije Gist')." },
  set_expiration_no_expiration: { AR: "حدد 'Expiration' كـ 'No expiration'.", DE: "Legen Sie 'Expiration' auf 'No expiration' fest.", EN: "Set 'Expiration' to 'No expiration'.", ES: "Establezca 'Expiration' en 'No expiration'.", FA: "'Expiration' را روی 'No expiration' تنظیم کنید.", FR: "Réglez 'Expiration' sur 'No expiration'.", HI: "'Expiration' को 'No expiration' पर सेट करें।", ID: "Atur 'Expiration' ke 'No expiration'.", IT: "Imposta 'Expiration' su 'No expiration'.", JA: "'Expiration' を 'No expiration' に設定します。", KO: "'Expiration'을 'No expiration'으로 설정합니다.", SW: "Weka 'Expiration' kuwa 'Hakuna mwisho'.", PL: "Ustaw 'Expiration' na 'No expiration'.", PT: "Defina 'Expiration' como 'No expiration'.", RU: "Установите 'Expiration' на 'No expiration'.", VI: "Đặt 'Expiration' thành 'No expiration'.", TR: "'Expiration' kısmını 'No expiration' olarak seçin.", UR: "'Expiration' کو 'No expiration' پر سیٹ کریں۔", UZ: "'Expiration' ni 'No expiration' ga sozlang.", ZH: "将'Expiration'设置为'No expiration'。", NL: "Stel 'Expiration' in op 'No expiration'.", SV: "Sätt 'Expiration' till 'No expiration'.", EL: "Ορίστε το 'Expiration' σε 'No expiration'.", CS: "Nastavte 'Expiration' na 'No expiration'.", HU: "Állítsa be az 'Expiration'-t 'No expiration'-ra.", RO: "Setează 'Expiration' la 'No expiration'.", BG: "Задайте 'Expiration' на 'No expiration'.", DA: "Indstil 'Expiration' til 'No expiration'.", FI: "Aseta 'Expiration' arvoon 'No expiration'.", SL: "Nastavite 'Expiration' na 'No expiration'." },
  repository_access_public_repos: { AR: "يمكن أن تبقى خانة 'Repository access' كما هي 'Public Repositories'.", DE: "Die Option 'Repository access' kann als 'Public Repositories' belassen werden.", EN: "The 'Repository access' part can remain as 'Public Repositories'.", ES: "La parte de 'Repository access' puede permanecer como 'Public Repositories'.", FA: "بخش 'Repository access' می‌تواند به صورت 'Public Repositories' باقی بماند.", FR: "La partie 'Repository access' peut rester définie sur 'Public Repositories'.", HI: "'Repository access' भाग 'Public Repositories' के रूप में रह सकता है।", ID: "Bagian 'Repository access' dapat tetap sebagai 'Public Repositories'.", IT: "La parte 'Repository access' può rimanere come 'Public Repositories'.", JA: "'Repository access' の部分は 'Public Repositories' のままにしておけます。", KO: "'Repository access' 부분은 'Public Repositories'로 유지할 수 있습니다.", SW: "Sehemu ya 'Repository access' inaweza kuendelea kuwa 'Public Repositories'.", PL: "Część 'Repository access' może pozostać jako 'Public Repositories'.", PT: "A parte 'Repository access' pode permanecer como 'Public Repositories'.", RU: "Часть 'Repository access' может оставаться как 'Public Repositories'.", VI: "Phần 'Repository access' có thể giữ nguyên là 'Public Repositories'.", TR: "'Repository access' kısmı 'Public Repositories' şeklinde kalabilir.", UR: "'Repository access' حصہ 'Public Repositories' کی شکل میں رہ سکتا ہے۔", UZ: "'Repository access' qismi 'Public Repositories' shaklida qolishi mumkin.", ZH: "'Repository access'部分可以保留为'Public Repositories'。", NL: "Het deel 'Repository access' kan als 'Public Repositories' blijven.", SV: "Del 'Repository access' kan förbli som 'Public Repositories'.", EL: "Το μέρος 'Repository access' μπορεί να παραμείνει ως 'Public Repositories'.", CS: "Část 'Repository access' může zůstat jako 'Public Repositories'.", HU: "A 'Repository access' rész 'Public Repositories' maradhat.", RO: "Partea 'Repository access' poate rămâne ca 'Public Repositories'.", BG: "Частта 'Repository access' може да остане като 'Public Repositories'.", DA: "'Repository access'-delen kan forblive som 'Public Repositories'.", FI: "'Repository access' -osa voi pysyä 'Public Repositories' -muodossa.", SL: "Del 'Repository access' lahko ostane kot 'Public Repositories'." },
  set_permissions_for_gist: { AR: "بعد ذلك، في قسم 'Permissions'، ابحث عن قسم 'Gist' وقم بتعيين الأذونات إلى 'Read and write'.", DE: "Suchen Sie anschließend im Abschnitt 'Permissions' nach dem Abschnitt 'Gist' und setzen Sie die Berechtigungen auf 'Read and write'.", EN: "Then, in the 'Permissions' section, find the 'Gist' section and set the permissions to 'Read and write'.", ES: "Luego, en la sección 'Permissions', encuentre la sección 'Gist' y establezca los permisos en 'Read and write'.", FA: "سپس، در بخش 'Permissions'، بخش 'Gist' را پیدا کرده و مجوزها را روی 'Read and write' تنظیم کنید.", FR: "Ensuite, dans la section 'Permissions', trouvez la section 'Gist' et réglez les autorisations sur 'Read and write'.", HI: "फिर, 'Permissions' खंड में, 'Gist' खंड ढूँढें और अनुमतियों को 'Read and write' पर सेट करें।", ID: "Kemudian, di bagian 'Permissions', temukan bagian 'Gist' dan atur izin menjadi 'Read and write'.", IT: "Quindi, nella sezione 'Permissions', trova la sezione 'Gist' e imposta i permessi su 'Read and write'.", JA: "次に、'Permissions' セクションで 'Gist' セクションを見つけ、権限を 'Read and write' に設定します。", KO: "그런 다음 'Permissions' 섹션에서 'Gist' 섹션을 찾아 권한을 'Read and write'로 설정합니다.", SW: "Kisha, katika sehemu ya 'Permissions', tafuta sehemu ya 'Gist' na weka ruhusa kuwa 'Read and write'.", PL: "Następnie w sekcji 'Permissions' znajdź sekcję 'Gist' i ustaw uprawnienia na 'Read and write'.", PT: "Depois, na seção 'Permissions', encontre a seção 'Gist' e defina as permissões para 'Read and write'.", RU: "Затем в разделе 'Permissions' найдите раздел 'Gist' и установите разрешения на 'Read and write'.", VI: "Sau đó, trong phần 'Permissions', tìm phần 'Gist' và đặt quyền thành 'Read and write'.", TR: "Ardından 'Permissions' kısmında 'Gist' kısmını bulup izinleri 'Read and write' olarak ayarlayın.", UR: "پھر، 'Permissions' حصے میں، 'Gist' حصہ تلاش کریں اور اجازتیں 'Read and write' پر سیٹ کریں۔", UZ: "Keyin 'Permissions' bo'limida 'Gist' bo'limini topib, ruxsatlarni 'Read and write' ga sozlang.", ZH: "然后，在'Permissions'部分中，找到'Gist'部分并将权限设置为'Read and write'。", NL: "Zoek vervolgens in de 'Permissions'-sectie naar de 'Gist'-sectie en stel de rechten in op 'Read and write'.", SV: "Sök sedan i 'Permissions'-sektionen efter 'Gist'-sektionen och ställ in behörigheterna till 'Read and write'.", EL: "Στη συνέχεια, στην ενότητα 'Permissions', βρείτε την ενότητα 'Gist' και ορίστε τα δικαιώματα σε 'Read and write'.", CS: "Poté v sekci 'Permissions' najděte sekci 'Gist' a nastavte oprávnění na 'Read and write'.", HU: "Ezután a 'Permissions' részen belül keresse meg a 'Gist' részt, és állítsa a jogosultságokat 'Read and write'-ra.", RO: "Apoi, în secțiunea 'Permissions', găsește secțiunea 'Gist' și setează permisiunile la 'Read and write'.", BG: "След това в раздела 'Permissions' намерете раздела 'Gist' и задайте разрешенията на 'Read and write'.", DA: "Find derefter 'Gist'-sektionen i 'Permissions'-afsnittet og indstil tilladelserne til 'Read and write'.", FI: "Etsi sitten 'Permissions'-osiosta 'Gist'-osio ja aseta oikeudet arvoon 'Read and write'.", SL: "Nato v razdelku 'Permissions' poiščite razdelek 'Gist' in nastavite dovoljenja na 'Read and write'." },
  click_generate_token: { AR: "انقر فوق الزر 'Generate token'.", DE: "Klicken Sie auf die Schaltfläche 'Generate token'.", EN: "Click the 'Generate token' button.", ES: "Haz clic en el botón 'Generate token'.", FA: "روی دکمه 'Generate token' کلیک کنید.", FR: "Cliquez sur le bouton 'Generate token'.", HI: "'Generate token' बटन पर क्लिक करें।", ID: "Klik tombol 'Generate token'.", IT: "Fai clic sul pulsante 'Generate token'.", JA: "「Generate token」ボタンをクリックします。", KO: "'Generate token' 버튼을 클릭합니다.", SW: "Bofya kifungo cha 'Generate token'.", PL: "Kliknij przycisk 'Generate token'.", PT: "Clique no botão 'Generate token'.", RU: "Нажмите кнопку 'Generate token'.", VI: "Nhấn vào nút 'Generate token'.", TR: "'Generate token' butonuna tıklayın.", UR: "'Generate token' بٹن پر کلک کریں۔", UZ: "'Generate token' tugmasini bosing.", ZH: "点击“Generate token”按钮。", NL: "Klik op de 'Generate token'-knop.", SV: "Klicka på 'Generate token'-knappen.", EL: "Κάντε κλικ στο κουμπί 'Generate token'.", CS: "Klikněte na tlačítko 'Generate token'.", HU: "Kattintson a 'Generate token' gombra.", RO: "Apasă pe butonul 'Generate token'.", BG: "Кликнете върху бутона 'Generate token'.", DA: "Klik på 'Generate token'-knappen.", FI: "Napsauta 'Generate token' -painiketta.", SL: "Kliknite na gumb 'Generate token'." },
  enter_token_in_setup: { AR: "ستقوم بإدخال هذا في جزء 'Gist Token' أثناء التثبيت.", DE: "Dies geben Sie im Abschnitt 'Gist Token' während der Installation ein.", EN: "You will enter this in the 'Gist Token' part during setup.", ES: "Lo ingresará en la parte 'Gist Token' durante la configuración.", FA: "این را در بخش 'Gist Token' هنگام نصب وارد خواهید کرد.", FR: "Vous entrerez cela dans la partie 'Gist Token' lors de l'installation.", HI: "आप इसे सेटअप के दौरान 'Gist Token' भाग में दर्ज करेंगे।", ID: "Anda akan memasukkan ini di bagian 'Gist Token' selama pengaturan.", IT: "Lo inserirai nella parte 'Gist Token' durante la configurazione.", JA: "これをセットアップ中に 'Gist Token' の部分に入力します。", KO: "이 토큰은 설치 중 'Gist Token' 부분에 입력합니다.", SW: "Utaweka hii katika sehemu ya 'Gist Token' wakati wa usanidi.", PL: "To wprowadzisz w części 'Gist Token' podczas konfiguracji.", PT: "Você irá inserir isso na parte 'Gist Token' durante a configuração.", RU: "Вы введете это в разделе 'Gist Token' во время установки.", VI: "Bạn sẽ nhập cái này vào phần 'Gist Token' trong quá trình thiết lập.", TR: "Bunu kurulumdaki Gist Token kısmına gireceksiniz.", UR: "اسے نصب کے دوران 'Gist Token' حصہ میں داخل کریں گے۔", UZ: "Buni o'rnatish jarayonida 'Gist Token' qismiga kiritasiz.", ZH: "您将在设置过程中输入此内容到'Gist Token'部分。", NL: "Dit voer je in bij het 'Gist Token'-gedeelte tijdens de installatie.", SV: "Du anger detta i 'Gist Token'-delen under installationen.", EL: "Θα το εισαγάγετε στο μέρος 'Gist Token' κατά την εγκατάσταση.", CS: "Toto zadáte v části 'Gist Token' během instalace.", HU: "Ezt a 'Gist Token' résznél adja meg a telepítés során.", RO: "Vei introduce asta în secțiunea 'Gist Token' în timpul configurării.", BG: "Ще въведете това в частта 'Gist Token' по време на инсталацията.", DA: "Du indtaster dette i 'Gist Token'-delen under opsætningen.", FI: "Syötät tämän 'Gist Token' -osaan asennuksen aikana.", SL: "To boste vnesli v del 'Gist Token' med nastavitvijo." },
  create_file_for_sync: { AR: "إنشاء ملف للتزامن:", DE: "Datei für die Synchronisierung erstellen:", EN: "Create file for sync:", ES: "Crear archivo para sincronización:", FA: "ایجاد فایل برای همگام‌سازی:", FR: "Créer un fichier pour la synchronisation :", HI: "सिंक के लिए फ़ाइल बनाएँ:", ID: "Buat berkas untuk sinkronisasi:", IT: "Crea file per la sincronizzazione:", JA: "同期用のファイルを作成:", KO: "동기화를 위한 파일 생성:", SW: "Unda faili kwa ajili ya usawa:", PL: "Utwórz plik do synchronizacji:", PT: "Criar arquivo para sincronização:", RU: "Создать файл для синхронизации:", VI: "Tạo tệp để đồng bộ:", TR: "Senkronizasyon için dosya oluşturma:", UR: "مزامنت کے لیے فائل تخلیق کریں:", UZ: "Sinхronizatsiya uchun fayl yarating:", ZH: "创建同步文件:", NL: "Bestand aanmaken voor synchronisatie:", SV: "Skapa fil för synkronisering:", EL: "Δημιουργία αρχείου για συγχρονισμό:", CS: "Vytvořit soubor pro synchronizaci:", HU: "Fájl létrehozása szinkronizáláshoz:", RO: "Creează fișier pentru sincronizare:", BG: "Създаване на файл за синхронизация:", DA: "Opret fil til synkronisering:", FI: "Luo tiedosto synkronointia varten:", SL: "Ustvari datoteko za sinhronizacijo:" },
  go_to_gist_page: { AR: "انتقل إلى صفحة Gist على GitHub:", DE: "Gehen Sie zur Gist-Seite auf GitHub:", EN: "Go to the Gist page on GitHub:", ES: "Ve a la página de Gist en GitHub:", FA: "به صفحه Gist در GitHub بروید:", FR: "Allez sur la page Gist sur GitHub :", HI: "GitHub पर Gist पृष्ठ पर जाएँ:", ID: "Pergi ke halaman Gist di GitHub:", IT: "Vai alla pagina Gist su GitHub:", JA: "GitHubのGistページに移動します:", KO: "GitHub의 Gist 페이지로 이동합니다:", SW: "Nenda ukurasa wa Gist kwenye GitHub:", PL: "Przejdź do strony Gist na GitHub:", PT: "Vá para a página Gist no GitHub:", RU: "Перейдите на страницу Gist на GitHub:", VI: "Đi tới trang Gist trên GitHub:", TR: "GitHub'da Gist sayfasına gidin:", UR: "GitHub پر Gist صفحہ پر جائیں:", UZ: "GitHub'dagi Gist sahifasiga o'ting:", ZH: "前往GitHub上的Gist页面:", NL: "Ga naar de Gist-pagina op GitHub:", SV: "Gå till Gist-sidan på GitHub:", EL: "Μεταβείτε στη σελίδα Gist στο GitHub:", CS: "Přejděte na stránku Gist na GitHubu:", HU: "Látogasson el a GitHub Gist oldalára:", RO: "Mergi la pagina Gist de pe GitHub:", BG: "Отидете на страницата Gist в GitHub:", DA: "Gå til Gist-siden på GitHub:", FI: "Siirry GitHubin Gist-sivulle:", SL: "Pojdite na stran Gist na GitHubu:" },
  specify_filename: { AR: "في المربع الذي يبدأ بـ 'Filename'، حدد اسم ملف (مثل: note1).", DE: "Geben Sie im Feld, das mit 'Filename' beginnt, einen Dateinamen an (z. B.: note1).", EN: "In the box starting with 'Filename', specify a file name (e.g., note1).", ES: "En el cuadro que comienza con 'Filename', especifique un nombre de archivo (por ejemplo, note1).", FA: "در کادری که با 'Filename' شروع می‌شود، یک نام فایل مشخص کنید (به عنوان مثال، note1).", FR: "Dans la zone commençant par 'Filename', spécifiez un nom de fichier (par exemple, note1).", HI: "'Filename' से शुरू होने वाले बॉक्स में, एक फ़ाइल नाम निर्दिष्ट करें (उदाहरण के लिए, note1).", ID: "Di kotak yang dimulai dengan 'Filename', tentukan nama file (misalnya, note1).", IT: "Nella casella che inizia con 'Filename', specifica un nome file (ad esempio, note1).", JA: "'Filename'で始まるボックスに、ファイル名を指定します（例: note1）。", KO: "'Filename'으로 시작하는 상자에 파일 이름을 지정합니다 (예: note1).", SW: "Katika sanduku ambalo linapoanza na 'Filename', taja jina la faili (mfano, note1).", PL: "W polu zaczynającym się od 'Filename' określ nazwę pliku (np. note1).", PT: "Na caixa que começa com 'Filename', especifique um nome de arquivo (por exemplo, note1).", RU: "В поле, начинающемся с 'Filename', укажите имя файла (например, note1).", VI: "Trong hộp bắt đầu bằng 'Filename', hãy chỉ định tên tệp (ví dụ: note1).", TR: "'Filename' ile başlayan kutucuğa bir dosya adı belirtin örneğin: (note1).", UR: "'Filename' سے شروع ہونے والے باکس میں، فائل کا نام مقرر کریں (مثال کے طور پر، note1)۔", UZ: "'Filename' bilan boshlanadigan katakka fayl nomini kiriting (masalan, note1).", ZH: "在以'Filename'开头的框中，指定一个文件名（例如，note1）。", NL: "Geef in het vak dat begint met 'Filename' een bestandsnaam op (bijv. note1).", SV: "Ange ett filnamn i rutan som börjar med 'Filename' (t.ex. note1).", EL: "Στο κουτί που ξεκινά με 'Filename', καθορίστε ένα όνομα αρχείου (π.χ. note1).", CS: "V poli začínajícím 'Filename' zadejte název souboru (např. note1).", HU: "A 'Filename'-nel kezdődő mezőben adjon meg egy fájlnevet (pl. note1).", RO: "În caseta care începe cu 'Filename', specifică un nume de fișier (de ex. note1).", BG: "В полето, започващо с 'Filename', укажете име на файл (напр. note1).", DA: "Angiv et filnavn i feltet, der starter med 'Filename' (f.eks. note1).", FI: "Määritä tiedostonimi 'Filename'-alkavaan ruutuun (esim. note1).", SL: "V polje, ki se začne z 'Filename', vnesite ime datoteke (npr. note1)." },
  enter_gist_name_in_setup: { AR: "ستقوم بإدخال هذا في جزء 'Gist Name' أثناء التثبيت.", DE: "Dies geben Sie im Abschnitt 'Gist Name' während der Installation ein.", EN: "You will enter this in the 'Gist Name' part during setup.", ES: "Lo ingresará en la parte 'Gist Name' durante la configuración.", FA: "این را در بخش 'Gist Name' هنگام نصب وارد خواهید کرد.", FR: "Vous entrerez cela dans la partie 'Gist Name' lors de l'installation.", HI: "आप इसे सेटअप के दौरान 'Gist Name' भाग में दर्ज करेंगे।", ID: "Anda akan memasukkan ini di bagian 'Gist Name' selama pengaturan.", IT: "Lo inserirai nella parte 'Gist Name' durante la configurazione.", JA: "これをセットアップ中に 'Gist Name' の部分に入力します。", KO: "이것은 설치 중 'Gist Name' 부분에 입력합니다.", SW: "Utaweka hii katika sehemu ya 'Gist Name' wakati wa usanidi.", PL: "To wprowadzisz w części 'Gist Name' podczas konfiguracji.", PT: "Você irá inserir isso na parte 'Gist Name' durante a configuração.", RU: "Вы введете это в разделе 'Gist Name' во время установки.", VI: "Bạn sẽ nhập cái này vào phần 'Gist Name' trong quá trình thiết lập.", TR: "Bunu kurulumdaki Gist Name kısmına gireceksiniz.", UR: "اسے نصب کے دوران 'Gist Name' حصہ میں داخل کریں گے۔", UZ: "Buni o'rnatish jarayonida 'Gist Name' qismiga kiritasiz.", ZH: "您将在设置过程中输入此内容到'Gist Name'部分。", NL: "Dit voer je in bij het 'Gist Name'-gedeelte tijdens de installatie.", SV: "Du anger detta i 'Gist Name'-delen under installationen.", EL: "Θα το εισαγάγετε στο μέρος 'Gist Name' κατά την εγκατάσταση.", CS: "Toto zadáte v části 'Gist Name' během instalace.", HU: "Ezt a 'Gist Name' résznél adja meg a telepítés során.", RO: "Vei introduce asta în secțiunea 'Gist Name' în timpul configurării.", BG: "Ще въведете това в частта 'Gist Name' по време на инсталацията.", DA: "Du indtaster dette i 'Gist Name'-delen under opsætningen.", FI: "Syötät tämän 'Gist Name' -osaan asennuksen aikana.", SL: "To boste vnesli v del 'Gist Name' med nastavitvijo." },
  write_something_below_filename: { AR: "اكتب شيئًا ما في المربع أسفل اسم الملف. (مطلوب للحفظ)", DE: "Schreiben Sie etwas in das Feld unter dem Dateinamen. (Erforderlich zum Speichern)", EN: "Write something in the box below the filename. (Required for saving)", ES: "Escribe algo en el cuadro debajo del nombre del archivo. (Requerido para guardar)", FA: "چیزی در کادر زیر نام فایل بنویسید. (برای ذخیره کردن ضروری است)", FR: "Écrivez quelque chose dans la zone sous le nom du fichier. (Requis pour l'enregistrement)", HI: "फ़ाइल नाम के नीचे के बॉक्स में कुछ लिखें। (सहेजने के लिए आवश्यक)", ID: "Tulis sesuatu di kotak di bawah nama file. (Diperlukan untuk penyimpanan)", IT: "Scrivi qualcosa nella casella sotto il nome del file. (Richiesto per il salvataggio)", JA: "ファイル名の下のボックスに何かを入力してください。（保存に必要です）", KO: "파일 이름 아래의 상자에 무언가를 작성하십시오. (저장에 필요함)", SW: "Andika kitu katika sanduku chini ya jina la faili. (Inahitajika kwa ajili ya kuhifadhi)", PL: "Napisz coś w polu poniżej nazwy pliku. (Wymagane do zapisania)", PT: "Escreva algo na caixa abaixo do nome do arquivo. (Necessário para salvar)", RU: "Напишите что-нибудь в поле под именем файла. (Требуется для сохранения)", VI: "Viết gì đó vào ô bên dưới tên tệp. (Cần thiết để lưu)", TR: "Kutucuğun hemen altındaki kutucuğa birşeyler yazın. (Kaydetmek için gerekli)", UR: "فائل نام کے نیچے والے باکس میں کچھ لکھیں۔ (محفوظ کرنے کے لیے ضروری)", UZ: "Fayl nomining ostidagi katakka nimadir yozing. (Saqlash uchun talab qilinadi)", ZH: "在文件名下方的框中写点东西。（保存所需）", NL: "Schrijf iets in het vak onder de bestandsnaam. (Vereist om op te slaan)", SV: "Skriv något i rutan under filnamnet. (Krävs för att spara)", EL: "Γράψτε κάτι στο κουτί κάτω από το όνομα αρχείου. (Απαιτείται για αποθήκευση)", CS: "Napište něco do pole pod názvem souboru. (Vyžadováno pro uložení)", HU: "Írjon valamit a fájlnév alatti mezőbe. (Szükséges a mentéshez)", RO: "Scrie ceva în caseta de sub numele fișierului. (Necesar pentru salvare)", BG: "Напишете нещо в полето под името на файла. (Необходимо за запазване)", DA: "Skriv noget i feltet under filnavnet. (Påkrævet for at gemme)", FI: "Kirjoita jotain tiedostonimen alapuolella olevaan ruutuun. (Vaaditaan tallentamiseen)", SL: "Zapišite nekaj v polje pod imenom datoteke. (Potrebno za shranjevanje)" },
  select_create_secret_gist: { AR: "ثم حدد خيار 'Create secret gist' وأنشئ الملف.", DE: "Wählen Sie dann die Option 'Create secret gist' aus und erstellen Sie die Datei.", EN: "Then select the 'Create secret gist' option and create the file.", ES: "Luego selecciona la opción 'Create secret gist' y crea el archivo.", FA: "سپس گزینه 'Create secret gist' را انتخاب کرده و فایل را ایجاد کنید.", FR: "Ensuite, sélectionnez l'option 'Create secret gist' et créez le fichier.", HI: "फिर 'Create secret gist' विकल्प चुनें और फ़ाइल बनाएँ।", ID: "Kemudian pilih opsi 'Create secret gist' dan buat berkas.", IT: "Quindi seleziona l'opzione 'Create secret gist' e crea il file.", JA: "次に「Create secret gist」オプションを選択し、ファイルを作成します。", KO: "그런 다음 'Create secret gist' 옵션을 선택하고 파일을 생성합니다.", SW: "Kisha chagua chaguo la 'Create secret gist' na uunda faili.", PL: "Następnie wybierz opcję 'Create secret gist' i utwórz plik.", PT: "Em seguida, selecione a opção 'Create secret gist' e crie o arquivo.", RU: "Затем выберите опцию 'Create secret gist' и создайте файл.", VI: "Sau đó chọn tùy chọn 'Create secret gist' và tạo tệp.", TR: "Ardından 'Create secret gist' seçeneğini seçin ve dosyayı oluşturun.", UR: "پھر 'Create secret gist' آپشن منتخب کریں اور فائل بنائیں۔", UZ: "Keyin 'Create secret gist' ni tanlang va faylni yarating.", ZH: "然后选择“Create secret gist”选项并创建文件。", NL: "Selecteer dan de optie 'Create secret gist' en maak het bestand aan.", SV: "Välj sedan alternativet 'Create secret gist' och skapa filen.", EL: "Στη συνέχεια επιλέξτε την επιλογή 'Create secret gist' και δημιουργήστε το αρχείο.", CS: "Poté vyberte možnost 'Create secret gist' a vytvořte soubor.", HU: "Ezután válassza a 'Create secret gist' opciót, és hozza létre a fájlt.", RO: "Apoi selectează opțiunea 'Create secret gist' și creează fișierul.", BG: "След това изберете опцията 'Create secret gist' и създайте файла.", DA: "Vælg derefter muligheden 'Create secret gist' og opret filen.", FI: "Valitse sitten 'Create secret gist' -vaihtoehto ja luo tiedosto.", SL: "Nato izberite možnost 'Create secret gist' in ustvarite datoteko." },
  copy_embed_content: { AR: "بعد ذلك، انسخ محتوى 'Embed'. يبدو المحتوى كما يلي:", DE: "Kopieren Sie als Nächstes den Inhalt von 'Embed'. Der Inhalt sieht wie folgt aus:", EN: "Next, copy the 'Embed' content. The content looks like this:", ES: "A continuación, copia el contenido de 'Embed'. El contenido se ve así:", FA: "بعد، محتوای 'Embed' را کپی کنید. محتوا به این شکل است:", FR: "Ensuite, copiez le contenu de 'Embed'. Le contenu ressemble à ceci :", HI: "अगला, 'Embed' सामग्री की प्रतिलिपि बनाएँ। सामग्री इस प्रकार दिखती है:", ID: "Selanjutnya, salin konten 'Embed'. Kontennya terlihat seperti ini:", IT: "Successivamente, copia il contenuto di 'Embed'. Il contenuto appare così:", JA: "次に、'Embed' のコンテンツをコピーします。コンテンツは次のようになります：", KO: "다음으로 'Embed' 내용을 복사합니다. 콘텐츠는 다음과 같습니다:", SW: "Ifuatayo, nakili maudhui ya 'Embed'. Yanaonekana kama hivi:", PL: "Następnie skopiuj zawartość 'Embed'. Zawartość wygląda następująco:", PT: "Em seguida, copie o conteúdo de 'Embed'. O conteúdo parece com isto:", RU: "Далее скопируйте содержимое 'Embed'. Содержимое выглядит так:", VI: "Tiếp theo, sao chép nội dung 'Embed'. Nội dung trông như thế này:", TR: "Ardından 'Embed' içeriğini kopyalayın. İçerik buna benzer:", UR: "اگلے، 'Embed' مواد کاپی کریں۔ مواد اس طرح دکھائی دیتا ہے:", UZ: "Keyin 'Embed' kontentini nusxa oling. Kontent quyidagicha ko'rinadi:", ZH: "接下来，复制'Embed'内容。内容如下所示:", NL: "Kopieer vervolgens de inhoud van 'Embed'. De inhoud ziet er zo uit:", SV: "Kopiera sedan innehållet i 'Embed'. Innehållet ser ut så här:", EL: "Στη συνέχεια, αντιγράψτε το περιεχόμενο του 'Embed'. Το περιεχόμενο μοιάζει έτσι:", CS: "Dále zkopírujte obsah 'Embed'. Obsah vypadá takto:", HU: "Ezután másolja ki az 'Embed' tartalmát. A tartalom így néz ki:", RO: "Apoi copiază conținutul 'Embed'. Conținutul arată astfel:", BG: "След това копирайте съдържанието на 'Embed'. Съдържанието изглежда така:", DA: "Kopier derefter indholdet af 'Embed'. Indholdet ser sådan ud:", FI: "Kopioi seuraavaksi 'Embed'-sisältö. Sisältö näyttää tältä:", SL: "Nato kopirajte vsebino 'Embed'. Vsebina izgleda takole:" },
  copy_id_after_username: { AR: "انسخ الجزء بعد اسم المستخدم حتى '.js'.", DE: "Kopieren Sie den Teil nach dem Benutzernamen bis zu '.js'.", EN: "Copy the part after the username up to '.js'.", ES: "Copia la parte después del nombre de usuario hasta '.js'.", FA: "بخشی را که بعد از نام کاربری و تا '.js' است کپی کنید.", FR: "Copiez la partie après le nom d'utilisateur jusqu'à '.js'.", HI: "उपयोगकर्ता नाम के बाद के भाग को '.js' तक कॉपी करें।", ID: "Salin bagian setelah nama pengguna hingga '.js'.", IT: "Copia la parte dopo il nome utente fino a '.js'.", JA: "ユーザー名の後の部分を '.js' までコピーします。", KO: "사용자 이름 뒤의 부분을 '.js'까지 복사합니다.", SW: "Nakili sehemu baada ya jina la mtumiaji hadi '.js'.", PL: "Skopiuj część po nazwie użytkownika aż do '.js'.", PT: "Copie a parte após o nome de usuário até '.js'.", RU: "Скопируйте часть после имени пользователя до '.js'.", VI: "Sao chép phần sau tên người dùng cho đến '.js'.", TR: "Kullanıcı adından sonraki kısmını .js kısmına kadar kopyalayın ve not edin.", UR: "صارف نام کے بعد کا حصہ '.js' تک کاپی کریں۔", UZ: "Foydalanuvchi nomidan keyingi qismni '.js' gacha nusxa oling.", ZH: "复制用户名后面直到'.js'的部分。", NL: "Kopieer het deel na de gebruikersnaam tot aan '.js'.", SV: "Kopiera delen efter användarnamnet fram till '.js'.", EL: "Αντιγράψτε το μέρος μετά το όνομα χρήστη μέχρι το '.js'.", CS: "Zkopírujte část za uživatelským jménem až do '.js'.", HU: "Másolja ki a felhasználónév utáni részt a '.js'-ig.", RO: "Copiază partea de după numele de utilizator până la '.js'.", BG: "Копирайте частта след потребителското име до '.js'.", DA: "Kopiér delen efter brugernavnet op til '.js'.", FI: "Kopioi käyttäjänimen jälkeinen osa '.js'-kohtaan asti.", SL: "Kopirajte del za uporabniškim imenom do '.js'." },
  example_id: { AR: "على سبيل المثال، هذا: 1bae985fef7d26eca0a0a8128fbb97e8", DE: "Beispiel: Dies: 1bae985fef7d26eca0a0a8128fbb97e8", EN: "For example, this: 1bae985fef7d26eca0a0a8128fbb97e8", ES: "Por ejemplo, esto: 1bae985fef7d26eca0a0a8128fbb97e8", FA: "به عنوان مثال، این: 1bae985fef7d26eca0a0a8128fbb97e8", FR: "Par exemple, ceci : 1bae985fef7d26eca0a0a8128fbb97e8", HI: "उदाहरण के लिए, यह: 1bae985fef7d26eca0a0a8128fbb97e8", ID: "Contohnya, ini: 1bae985fef7d26eca0a0a8128fbb97e8", IT: "Ad esempio, questo: 1bae985fef7d26eca0a0a8128fbb97e8", JA: "例えば、これ: 1bae985fef7d26eca0a0a8128fbb97e8", KO: "예를 들어, 이것: 1bae985fef7d26eca0a0a8128fbb97e8", SW: "Kwa mfano, hii: 1bae985fef7d26eca0a0a8128fbb97e8", PL: "Na przykład, to: 1bae985fef7d26eca0a0a8128fbb97e8", PT: "Por exemplo, isto: 1bae985fef7d26eca0a0a8128fbb97e8", RU: "Например, это: 1bae985fef7d26eca0a0a8128fbb97e8", VI: "Ví dụ, cái này: 1bae985fef7d26eca0a0a8128fbb97e8", TR: "Üstteki örnek için bu: 1bae985fef7d26eca0a0a8128fbb97e8", UR: "مثال کے طور پر، یہ: 1bae985fef7d26eca0a0a8128fbb97e8", UZ: "Masalan, bu: 1bae985fef7d26eca0a0a8128fbb97e8", ZH: "例如，这个：1bae985fef7d26eca0a0a8128fbb97e8", NL: "Bijvoorbeeld dit: 1bae985fef7d26eca0a0a8128fbb97e8", SV: "Till exempel detta: 1bae985fef7d26eca0a0a8128fbb97e8", EL: "Για παράδειγμα, αυτό: 1bae985fef7d26eca0a0a8128fbb97e8", CS: "Například toto: 1bae985fef7d26eca0a0a8128fbb97e8", HU: "Például ez: 1bae985fef7d26eca0a0a8128fbb97e8", RO: "De exemplu, acesta: 1bae985fef7d26eca0a0a8128fbb97e8", BG: "Например това: 1bae985fef7d26eca0a0a8128fbb97e8", DA: "For eksempel dette: 1bae985fef7d26eca0a0a8128fbb97e8", FI: "Esimerkiksi tämä: 1bae985fef7d26eca0a0a8128fbb97e8", SL: "Na primer tole: 1bae985fef7d26eca0a0a8128fbb97e8" },
  enter_gist_id_in_setup: { AR: "(ستقوم بإدخال هذا في جزء 'Gist ID' أثناء التثبيت.)", DE: "(Dies geben Sie im Abschnitt 'Gist ID' während der Installation ein.)", EN: "(You will enter this in the 'Gist ID' part during setup.)", ES: "(Lo ingresará en la parte 'Gist ID' durante la configuración.)", FA: "(این را در بخش 'Gist ID' هنگام نصب وارد خواهید کرد.)", FR: "(Vous entrerez cela dans la partie 'Gist ID' lors de l'installation.)", HI: "(आप इसे सेटअप के दौरान 'Gist ID' भाग में दर्ज करेंगे।)", ID: "(Anda akan memasukkan ini di bagian 'Gist ID' selama pengaturan.)", IT: "(Lo inserirai nella parte 'Gist ID' durante la configurazione.)", JA: "（セットアップ中に 'Gist ID' の部分に入力します。）", KO: "(설치 중 'Gist ID' 부분에 입력합니다.)", SW: "(Utaweka hii katika sehemu ya 'Gist ID' wakati wa usanidi.)", PL: "(To wprowadzisz w części 'Gist ID' podczas konfiguracji.)", PT: "(Você irá inserir isso na parte 'Gist ID' durante a configuração.)", RU: "(Вы введете это в разделе 'Gist ID' во время установки.)", VI: "(Bạn sẽ nhập cái này vào phần 'Gist ID' trong quá trình thiết lập.)", TR: "(Bunu kurulumdaki Gist ID kısmına gireceksiniz.)", UR: "(اسے نصب کے دوران 'Gist ID' حصہ میں داخل کریں گے۔)", UZ: "(Buni o'rnatish jarayonida 'Gist ID' qismiga kiritasiz.)", ZH: "（您将在设置过程中输入此内容到'Gist ID'部分。）", NL: "(Dit voer je in bij het 'Gist ID'-gedeelte tijdens de installatie.)", SV: "(Du anger detta i 'Gist ID'-delen under installationen.)", EL: "(Θα το εισαγάγετε στο μέρος 'Gist ID' κατά την εγκατάσταση.)", CS: "(Toto zadáte v části 'Gist ID' během instalace.)", HU: "(Ezt a 'Gist ID' résznél adja meg a telepítés során.)", RO: "(Vei introduce asta în secțiunea 'Gist ID' în timpul configurării.)", BG: "(Ще въведете това в частта 'Gist ID' по време на инсталацията.)", DA: "(Du indtaster dette i 'Gist ID'-delen under opsætningen.)", FI: "(Syötät tämän 'Gist ID' -osaan asennuksen aikana.)", SL: "(To boste vnesli v del 'Gist ID' med nastavitvijo.)" },
  setup_details: { AR: "تفاصيل التثبيت", DE: "Setup-Details", EN: "Setup details", ES: "Detalles de la configuración", FA: "جزئیات نصب", FR: "Détails de l'installation", HI: "सेटअप विवरण", ID: "Detail pengaturan", IT: "Dettagli di configurazione", JA: "セットアップの詳細", KO: "설치 세부 정보", SW: "Maelezo ya usanidi", PL: "Szczegóły konfiguracji", PT: "Detalhes da configuração", RU: "Детали установки", VI: "Chi tiết cài đặt", TR: "Kurulum detayları", UR: "ترتیب کے تفصیلات", UZ: "O'rnatish tafsilotlari", ZH: "安装详情", NL: "Installatiedetails", SV: "Inställningsdetaljer", EL: "Λεπτομέρειες εγκατάστασης", CS: "Detaily nastavení", HU: "Telepítési részletek", RO: "Detalii de configurare", BG: "Детайли за настройка", DA: "Opsætningsdetaljer", FI: "Asennuksen tiedot", SL: "Podrobnosti nastavitve" },
  backup_data_before_connection: { AR: "يرجى عمل نسخة احتياطية من بياناتك قبل الاتصال.", DE: "Bitte sichern Sie Ihre Daten vor der Verbindung.", EN: "Back up your data before connecting.", ES: "Realice una copia de seguridad de sus datos antes de conectar.", FA: "قبل از اتصال، اطلاعات خود را پشتیبان بگیرید.", FR: "Sauvegardez vos données avant la connexion.", HI: "कनेक्ट करने से पहले अपना डेटा बैकअप लें।", ID: "Cadangkan data Anda sebelum terhubung.", IT: "Esegui il backup dei tuoi dati prima di connetterti.", JA: "接続前にデータをバックアップしてください。", KO: "연결 전에 데이터를 백업하십시오.", SW: "Hifadhi nakala ya data yako kabla ya kuunganisha.", PL: "Wykonaj kopię zapasową danych przed połączeniem.", PT: "Faça backup dos seus dados antes de conectar.", RU: "Сделайте резервную копию данных перед подключением.", VI: "Sao lưu dữ liệu của bạn trước khi kết nối.", TR: "Bağlantı öncesinde cihazınızdaki verilerinizi yedekleyin.", UR: "کنکشن سے پہلے اپنے ڈیٹا کا بیک اپ لیں۔", UZ: "Ulanishdan oldin ma'lumotlaringizni zaxiralang.", ZH: "连接前请备份您的数据。", NL: "Maak een back-up van je gegevens voordat je verbinding maakt.", SV: "Säkerhetskopiera dina data innan du ansluter.", EL: "Δημιουργήστε αντίγραφο ασφαλείας των δεδομένων σας πριν συνδεθείτε.", CS: "Zálohujte si data před připojením.", HU: "Készítsen biztonsági másolatot adatairól az összekapcsolás előtt.", RO: "Fă o copie de rezervă a datelor tale înainte de conectare.", BG: "Направете резервно копие на данните си преди свързване.", DA: "Lav en sikkerhedskopi af dine data, før du opretter forbindelse.", FI: "Varmuuskopioi tietosi ennen yhteyden muodostamista.", SL: "Pred povezavo naredite varnostno kopijo podatkov." },
  please_fill_all_fields: { AR: "يرجى ملء جميع الحقول!", DE: "Bitte füllen Sie alle Felder aus!", EN: "Please fill in all fields!", ES: "¡Por favor, complete todos los campos!", FA: "لطفاً همه فیلدها را پر کنید!", FR: "Veuillez remplir tous les champs!", HI: "कृपया सभी फ़ील्ड भरें!", ID: "Silakan isi semua bidang!", IT: "Si prega di compilare tutti i campi!", JA: "すべてのフィールドに入力してください！", KO: "모든 필드를 채워주세요!", SW: "Tafadhali jaza visanduku vyote!", PL: "Proszę wypełnić wszystkie pola!", PT: "Por favor, preencha todos os campos!", RU: "Пожалуйста, заполните все поля!", VI: "Vui lòng điền vào tất cả các trường!", TR: "Lütfen tüm alanları doldurun!", UR: "براہ کرم تمام خانوں کو بھریں!", UZ: "Iltimos, barcha maydonlarni to'ldiring!", ZH: "请填写所有字段！", NL: "Vul alle velden in!", SV: "Fyll i alla fält!", EL: "Παρακαλώ συμπληρώστε όλα τα πεδία!", CS: "Vyplňte prosím všechna pole!", HU: "Kérjük, töltse ki az összes mezőt!", RO: "Vă rugăm să completați toate câmpurile!", BG: "Моля, попълнете всички полета!", DA: "Udfyld venligst alle felter!", FI: "Täytä kaikki kentät!", SL: "Prosimo, izpolnite vsa polja!" },
  gist_info_error_or_server_unreachable: { AR: "معلومات Gist خاطئة أو لا يمكن الوصول إلى الخادم.", DE: "Gist-Informationen fehlerhaft oder Server nicht erreichbar.", EN: "Gist info is incorrect or the server is unreachable.", ES: "La información de Gist es incorrecta o el servidor no está disponible.", FA: "اطلاعات Gist اشتباه است یا به سرور دسترسی ندارید.", FR: "Les informations de Gist sont incorrectes ou le serveur est inaccessible.", HI: "Gist जानकारी गलत है या सर्वर तक पहुँचा नहीं जा सकता।", ID: "Informasi Gist salah atau server tidak dapat dijangkau.", IT: "Le informazioni di Gist sono errate o il server non è raggiungibile.", JA: "Gist情報が間違っているか、サーバーに接続できません。", KO: "Gist 정보가 잘못되었거나 서버에 연결할 수 없습니다.", SW: "Taarifa za Gist zinakosa au haifiki kwa seva.", PL: "Informacje o Gist są nieprawidłowe lub serwer jest niedostępny.", PT: "As informações do Gist estão incorretas ou o servidor está inacessível.", RU: "Информация о Gist неверна или сервер недоступен.", VI: "Thông tin Gist không chính xác hoặc không thể kết nối đến máy chủ.", TR: "Gist bilgileri hatalı ya da sunucuya ulaşılmıyor.", UR: "Gist کی معلومات غلط ہیں یا سرور تک پہنچ نہیں ہو رہا ہے۔", UZ: "Gist ma'lumotlari noto'g'ri yoki serverga ulanish mumkin emas.", ZH: "Gist信息有误或无法连接到服务器。", NL: "Gist-info is onjuist of de server is onbereikbaar.", SV: "Gist-informationen är felaktig eller servern är onåbar.", EL: "Οι πληροφορίες Gist είναι λανθασμένες ή ο διακομιστής δεν είναι προσβάσιμος.", CS: "Informace o Gist jsou nesprávné nebo server není dostupný.", HU: "A Gist információk hibásak, vagy a szerver nem érhető el.", RO: "Informațiile Gist sunt incorecte sau serverul nu este accesibil.", BG: "Информацията за Gist е неправилна или сървърът е недостъпен.", DA: "Gist-oplysningerne er forkerte, eller serveren kan ikke nås.", FI: "Gist-tiedot ovat virheelliset tai palvelimeen ei saada yhteyttä.", SL: "Informacije o Gist so napačne ali strežnik ni dosegljiv." },
  sync_error_message: { AR: "تعذر بدء المزامنة بسبب عدم تطابق معرف Gist-كلمة المرور، أو ازدحام الخادم، أو خطأ في اتصال الإنترنت.\nلا تقم بإجراء تعديلات على أجهزة أخرى حتى يتم حل المشكلة.\nسيتم إعلامك عند استعادة الاتصال.", DE: "Die Synchronisierung konnte aufgrund von Gist-ID-Passwort-Unstimmigkeiten, Serverüberlastung oder Internetverbindungsfehlern nicht gestartet werden.\nFühren Sie keine Bearbeitungen auf anderen Geräten durch, bis das Problem behoben ist.\nSie werden benachrichtigt, sobald die Verbindung wiederhergestellt ist.", EN: "Synchronization could not be initiated due to Gist ID-password mismatch, server congestion, or internet connection error.\nDo not make edits on another device until the issue is resolved.\nYou will be notified when the connection is restored.", ES: "No se pudo iniciar la sincronización debido a una discrepancia en el ID/contraseña de Gist, congestión del servidor o error de conexión a internet.\nNo realice ediciones en otro dispositivo hasta que se resuelva el problema.\nSe le notificará cuando se restablezca la conexión.", FA: "به دلیل عدم تطابق شناسه یا رمز عبور Gist، ازدحام سرور یا خطای اتصال اینترنت، همگام‌سازی آغاز نشد.\nتا زمانی که مشکل برطرف شود، ویرایش در دستگاه دیگری انجام ندهید.\nهنگام بازگرداندن اتصال، به شما اطلاع داده خواهد شد.", FR: "La synchronisation n'a pas pu être initiée en raison d'une incohérence entre l'ID et le mot de passe Gist, de la congestion du serveur ou d'une erreur de connexion Internet.\nNe faites pas de modifications sur un autre appareil tant que le problème n'est pas résolu.\nVous serez informé lorsque la connexion sera rétablie.", HI: "Gist ID-पासवर्ड मिसमैच, सर्वर भीड़ या इंटरनेट कनेक्शन त्रुटि के कारण सिंक्रनाइज़ेशन शुरू नहीं किया जा सका।\nसमस्या का समाधान होने तक किसी अन्य उपकरण पर संपादन न करें।\nजब कनेक्शन पुनः स्थापित हो जाएगा तब आपको सूचित किया जाएगा।", ID: "Sinkronisasi tidak dapat dimulai karena ketidakcocokan ID-Password Gist, kepadatan server, atau kesalahan koneksi internet.\nJangan melakukan pengeditan di perangkat lain sampai masalah teratasi.\nAnda akan diberitahu saat koneksi dipulihkan.", IT: "La sincronizzazione non è stata avviata a causa di una mancata corrispondenza tra ID e password di Gist, congestione del server o errore di connessione a Internet.\nNon apportare modifiche su un altro dispositivo fino a quando il problema non sarà risolto.\nVerrai avvisato quando la connessione verrà ripristinata.", JA: "Gist IDとパスワードの不一致、サーバーの混雑、またはインターネット接続エラーにより、同期を開始できませんでした。\n問題が解決するまで他のデバイスで編集を行わないでください。\n接続が復元されると通知されます。", KO: "Gist ID-비밀번호 불일치, 서버 혼잡 또는 인터넷 연결 오류로 인해 동기화를 시작할 수 없습니다.\n문제가 해결될 때까지 다른 장치에서 편집하지 마십시오.\n연결이 복구되면 알림을 받게 됩니다.", SW: "Usawa haukuweza kuanzishwa kwa sababu ya usambazaji wa nambari ya Gist-na nywila, mwingi wa mitandao au hitilafu ya muunganisho wa intaneti.\nUsihariri kwenye kifaa kingine mpaka tatizo litatatuliwa.\nUtataarifiwa wakati muunganisho utaponyolewa.", PL: "Nie udało się rozpocząć synchronizacji z powodu niezgodności identyfikatora Gist-hasła, przeciążenia serwera lub błędu połączenia internetowego.\nNie dokonuj edycji na innym urządzeniu, dopóki problem nie zostanie rozwiązany.\nZostaniesz powiadomiony, gdy połączenie zostanie przywrócone.", PT: "A sincronização não pôde ser iniciada devido à incompatibilidade de ID-senha do Gist, congestionamento do servidor ou erro de conexão com a internet.\nNão faça edições em outro dispositivo até que o problema seja resolvido.\nVocê será notificado quando a conexão for restaurada.", RU: "Синхронизация не была запущена из-за несоответствия идентификатора Gist-пароля, перегрузки сервера или ошибки подключения к Интернету.\nНе вносите правки на другом устройстве, пока проблема не будет решена.\nВы получите уведомление, когда соединение будет восстановлено.", VI: "Không thể khởi động đồng bộ hóa do không khớp ID-Mật khẩu Gist, tắc nghẽn máy chủ hoặc lỗi kết nối internet.\nĐừng chỉnh sửa trên thiết bị khác cho đến khi vấn đề được giải quyết.\nBạn sẽ được thông báo khi kết nối được khôi phục.", TR: "Gist ID-Şifre uyuşmazlığı, sunucu yoğunluğu ya da internet bağlantısı hatası sebebiyle senkronizasyon başlatılamadı.\nSorun çözülene kadar başka bir cihazda düzenleme yapmayın.\nBağlantı sağlandığında bilgi verilecek.", UR: "Gist ID-پاس ورڈ عدم مطابقت، سرور کی بھیڑ یا انٹرنیٹ کنکشن کی خرابی کی وجہ سے مطابقت شروع نہیں ہو سکی۔\nمسائل دور ہونے تک کسی اور آلے پر ترمیم نہ کریں۔\nجب کنکشن قائم ہو جائے گا تو آپ کو مطلع کیا جائے گا۔", UZ: "Gist ID-parol mos kelmasligi, server zo'rlik yoki internet ulanish xatosi tufayli sinxronizatsiya boshlanmadi.\nMuammo hal bo'lguncha boshqa qurilmada tahrirlashni boshlamang.\nUlanish tiklanganda sizga xabar beriladi.", ZH: "由于Gist ID-密码不匹配、服务器拥堵或互联网连接错误，同步无法启动。\n在问题解决之前，请勿在其他设备上进行编辑。\n连接恢复时会通知您。", NL: "Synchronisatie kon niet worden gestart vanwege een mismatch tussen Gist-ID en wachtwoord, serverdrukte of een internetverbindingsfout.\nBreng geen wijzigingen aan op andere apparaten totdat het probleem is opgelost.\nU wordt geïnformeerd wanneer de verbinding is hersteld.", SV: "Synkronisering kunde inte påbörjas på grund av mismatch mellan Gist-ID och lösenord, serveröverbelastning eller internetanslutningsfel.\nGör inga ändringar på andra enheter tills problemet är löst.\nDu meddelas när anslutningen är återställd.", EL: "Η συγχρονισμός δεν μπόρεσε να ξεκινήσει λόγω ασυμφωνίας ID-Κωδικού Gist, υπερφόρτωσης του διακομιστή ή σφάλματος σύνδεσης στο διαδίκτυο.\nΜην κάνετε επεξεργασίες σε άλλες συσκευές μέχρι να επιλυθεί το πρόβλημα.\nΘα ειδοποιηθείτε όταν αποκατασταθεί η σύνδεση.", CS: "Synchronizace nemohla být zahájena kvůli nesouladu ID a hesla Gist, přetížení serveru nebo chybě internetového připojení.\nNeprovádějte úpravy na jiných zařízeních, dokud nebude problém vyřešen.\nBudete upozorněni, jakmile bude spojení obnoveno.", HU: "A szinkronizálás nem indulhatott el a Gist ID-jelszó eltérése, a szerver túlterheltsége vagy internetkapcsolati hiba miatt.\nNe végezzen módosításokat más eszközökön, amíg a probléma meg nem oldódik.\nÉrtesítést kap, amikor a kapcsolat helyreáll.", RO: "Sincronizarea nu a putut fi inițiată din cauza nepotrivirii ID-ului și parolei Gist, a congestiei serverului sau a unei erori de conexiune la internet.\nNu efectuați modificări pe alte dispozitive până când problema nu este rezolvată.\nVeți fi notificat când conexiunea va fi restabilită.", BG: "Синхронизацията не можа да започне поради несъответствие между ID и парола на Gist, претоварване на сървъра или грешка в интернет връзката.\nНе правете промени на други устройства, докато проблемът не бъде разрешен.\nЩе бъдете уведомени, когато връзката бъде възстановена.", DA: "Synkronisering kunne ikke startes på grund af uoverensstemmelse mellem Gist-ID og adgangskode, serveroverbelastning eller internetforbindelsesfejl.\nForetag ingen redigeringer på andre enheder, før problemet er løst.\nDu vil blive underrettet, når forbindelsen er genoprettet.", FI: "Synkronointia ei voitu aloittaa Gist-ID-salasanan ristiriidan, palvelimen ruuhkautumisen tai internet-yhteyden virheen vuoksi.\nÄlä tee muokkauksia muilla laitteilla, ennen kuin ongelma on ratkaistu.\nSinulle ilmoitetaan, kun yhteys on palautettu.", SL: "Sinhronizacija se ni mogla začeti zaradi neskladja ID-ja in gesla Gist, preobremenjenosti strežnika ali napake v internetni povezavi.\nNe urejajte na drugih napravah, dokler težava ni odpravljena.\nObveščeni boste, ko bo povezava obnovljena." },
  sync_successful: { AR: "المزامنة ناجحة.", DE: "Synchronisierung erfolgreich.", EN: "Sync successful.", ES: "Sincronización exitosa.", FA: "همگام‌سازی موفق بود.", FR: "Synchronisation réussie.", HI: "सिंक सफल।", ID: "Sinkronisasi berhasil.", IT: "Sincronizzazione completata.", JA: "同期が成功しました。", KO: "동기화 성공.", SW: "Usawa mafanikiwa.", PL: "Synchronizacja zakończona pomyślnie.", PT: "Sincronização bem-sucedida.", RU: "Синхронизация прошла успешно.", VI: "Đồng bộ hóa thành công.", TR: "Senkronizasyon başarılı.", UR: "مطابقت کامیاب ہوئی۔", UZ: "Sinxronizatsiya muvaffaqiyatli amalga oshirildi.", ZH: "同步成功。", NL: "Synchronisatie geslaagd.", SV: "Synkronisering lyckad.", EL: "Ο συγχρονισμός ολοκληρώθηκε επιτυχώς.", CS: "Synchronizace úspěšná.", HU: "Szinkronizálás sikeres.", RO: "Sincronizare reușită.", BG: "Синхронизацията е успешна.", DA: "Synkronisering vellykket.", FI: "Synkronointi onnistui.", SL: "Sinhronizacija uspešna." },
  sync_active: { AR: "المزامنة نشطة", DE: "Synchronisierung aktiv", EN: "Sync active", ES: "Sincronización activa", FA: "همگام‌سازی فعال است", FR: "Synchronisation active", HI: "सिंक सक्रिय है", ID: "Sinkronisasi aktif", IT: "Sincronizzazione attiva", JA: "同期が有効です", KO: "동기화 활성화됨", SW: "Usawa unashughulikia", PL: "Synchronizacja aktywna", PT: "Sincronização ativa", RU: "Синхронизация активна", VI: "Đồng bộ hóa đang hoạt động", TR: "Senkronizasyon etkin", UR: "مطابقت فعال ہے", UZ: "Sinxronizatsiya faol", ZH: "同步已激活", NL: "Synchronisatie actief", SV: "Synkronisering aktiv", EL: "Ο συγχρονισμός είναι ενεργός", CS: "Synchronizace aktivní", HU: "Szinkronizálás aktív", RO: "Sincronizare activă", BG: "Синхронизацията е активна", DA: "Synkronisering aktiv", FI: "Synkronointi aktiivinen", SL: "Sinhronizacija aktivna" },
  fetch_data: { AR: "جلب البيانات", DE: "Daten abrufen", EN: "Fetch Data", ES: "Obtener datos", FA: "دریافت داده‌ها", FR: "Récupérer les données", HI: "डेटा प्राप्त करें", ID: "Ambil Data", IT: "Recupera dati", JA: "データを取得", KO: "데이터 가져오기", SW: "Pata Data", PL: "Pobierz dane", PT: "Buscar dados", RU: "Получить данные", VI: "Lấy dữ liệu", TR: "Verileri Getir", UR: "ڈیٹا لے آؤ", UZ: "Ma'lumotlarni olish", ZH: "获取数据", NL: "Gegevens ophalen", SV: "Hämta data", EL: "Ανάκτηση δεδομένων", CS: "Načíst data", HU: "Adatok lekérése", RO: "Obține date", BG: "Извличане на данни", DA: "Hent data", FI: "Hae tiedot", SL: "Pridobi podatke" },
  sync_failed_or_no_data_on_server_check_setup_info: { AR: "فشل المزامنة أو لا توجد بيانات على الخادم. تحقق من المعلومات اللازمة للإعداد.", DE: "Synchronisierung fehlgeschlagen oder keine Daten auf dem Server. Überprüfen Sie die für die Installation benötigten Informationen.", EN: "Sync failed or no data on the server. Check the required information for setup.", ES: "La sincronización falló o no hay datos en el servidor. Verifique la información necesaria para la configuración.", FA: "همگام‌سازی ناموفق بود یا داده‌ای روی سرور وجود ندارد. اطلاعات مورد نیاز برای راه‌اندازی را بررسی کنید.", FR: "Échec de la synchronisation ou aucune donnée sur le serveur. Vérifiez les informations requises pour l'installation.", HI: "सिंक विफल या सर्वर पर कोई डेटा नहीं है। सेटअप के लिए आवश्यक जानकारी की जाँच करें।", ID: "Sinkronisasi gagal atau tidak ada data di server. Periksa informasi yang diperlukan untuk penyiapan.", IT: "Sincronizzazione fallita o nessun dato sul server. Controlla le informazioni necessarie per la configurazione.", JA: "同期に失敗したか、サーバーにデータがありません。セットアップに必要な情報を確認してください。", KO: "동기화 실패 또는 서버에 데이터가 없습니다. 설정에 필요한 정보를 확인하십시오.", SW: "Usawa ulifeli au hakuna data kwenye seva. Angalia habari zinazohitajika kwa ajili ya usanidi.", PL: "Synchronizacja nie powiodła się lub brak danych na serwerze. Sprawdź wymagane informacje do konfiguracji.", PT: "A sincronização falhou ou não há dados no servidor. Verifique as informações necessárias para a configuração.", RU: "Синхронизация не удалась или данных на сервере нет. Проверьте необходимую информацию для настройки.", VI: "Đồng bộ hóa thất bại hoặc không có dữ liệu trên máy chủ. Kiểm tra thông tin cần thiết cho cài đặt.", TR: "Senkronizasyon başarısız ya da sunucuda veri yok. Kurulum için gerekli bilgileri kontrol edin.", UR: "مطابقت ناکام ہوئی یا سرور پر کوئی ڈیٹا نہیں۔ ترتیب کے لیے درکار معلومات کی جانچ کریں۔", UZ: "Sinxronizatsiya muvaffaqiyatsiz bo'ldi yoki serverda ma'lumot yo'q. Sozlash uchun zarur bo'lgan ma'lumotlarni tekshiring.", ZH: "同步失败或服务器上没有数据。检查设置所需的信息。", NL: "Synchronisatie mislukt of geen gegevens op de server. Controleer de benodigde informatie voor de installatie.", SV: "Synkronisering misslyckades eller ingen data på servern. Kontrollera den information som krävs för installationen.", EL: "Ο συγχρονισμός απέτυχε ή δεν υπάρχουν δεδομένα στον διακομιστή. Ελέγξτε τις απαραίτητες πληροφορίες για τη ρύθμιση.", CS: "Synchronizace selhala nebo na serveru nejsou žádná data. Zkontrolujte požadované informace pro nastavení.", HU: "A szinkronizálás sikertelen vagy nincs adat a szerveren. Ellenőrizze a telepítéshez szükséges információkat.", RO: "Sincronizarea a eșuat sau nu există date pe server. Verificați informațiile necesare pentru configurare.", BG: "Синхронизацията се провали или няма данни на сървъра. Проверете необходимата информация за настройка.", DA: "Synkronisering mislykkedes eller ingen data på serveren. Tjek de nødvendige oplysninger til opsætning.", FI: "Synkronointi epäonnistui tai palvelimella ei ole tietoja. Tarkista asennukseen tarvittavat tiedot.", SL: "Sinhronizacija ni uspela ali na strežniku ni podatkov. Preverite potrebne informacije za nastavitev." },
  initial_setup: { AR: "الإعداد الأولي", DE: "Erstinstallation", EN: "Initial Setup", ES: "Configuración inicial", FA: "راه‌اندازی اولیه", FR: "Installation initiale", HI: "प्रारंभिक सेटअप", ID: "Penyiapan Awal", IT: "Configurazione iniziale", JA: "初期設定", KO: "초기 설정", SW: "Usanidi wa Awali", PL: "Konfiguracja początkowa", PT: "Configuração inicial", RU: "Первоначальная настройка", VI: "Cài đặt ban đầu", TR: "İlk Kurulum", UR: "پہلی ترتیب", UZ: "Dastlabki sozlash", ZH: "初始设置", NL: "Initiële installatie", SV: "Initial installation", EL: "Αρχική ρύθμιση", CS: "Počáteční nastavení", HU: "Kezdeti beállítás", RO: "Configurare inițială", BG: "Първоначална настройка", DA: "Første opsætning", FI: "Alkuasetukset", SL: "Začetna nastavitev" },
  understood: { AR: "فهمت", DE: "Verstanden", EN: "Understood", ES: "Entendido", FA: "فهمیدم", FR: "Compris", HI: "समझ गया", ID: "Mengerti", IT: "Capito", JA: "了解しました", KO: "이해했습니다", SW: "Nimeelewa", PL: "Zrozumiano", PT: "Entendido", RU: "Понятно", VI: "Đã hiểu", TR: "Anladım", UR: "سمجھ گیا", UZ: "Tushundim", ZH: "明白了", NL: "Begrepen", SV: "Förstått", EL: "Κατάλαβα", CS: "Rozumím", HU: "Megértettem", RO: "Înteleg", BG: "Разбрано", DA: "Forstået", FI: "Ymmärretty", SL: "Razumem" }
};
function translate(key, langCode = localStorage.getItem("selectedLanguage") || "EN") { return translations[key]?.[langCode] || translations[key]["EN"]; }
//setupResizer
function setupResizer(resizerSelector, minWidth = 220, maxWidth = 700) {
  const resizers = document.querySelectorAll(resizerSelector);
  resizers.forEach(resizer => {
    let isResizing = false;
    let startX, startWidth;
    let target = resizer.parentElement;
    resizer.addEventListener('mousedown', (e) => {
      isResizing = true;
      startX = e.clientX;
      startWidth = parseInt(window.getComputedStyle(target).width, 10);
      document.addEventListener('mousemove', resize);
      document.addEventListener('mouseup', stopResize);
    });
    function resize(e) {
      if (!isResizing) return;
      if (document.documentElement.lang === "ar" || document.documentElement.lang === "fa") {
        var newWidth = startWidth - (e.clientX - startX);
      } else {
        var newWidth = startWidth + (e.clientX - startX);
      }
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        target.style.width = `${newWidth}px`;
      }
    }
    function stopResize() {
      isResizing = false;
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', stopResize);
    }
  });
}

document.getElementById('omod_toggle').addEventListener('click', () => {
  const noteEditor = document.getElementById('note-editor');
  noteEditor.style.cursor = noteEditor.style.cursor === 'default' ? 'text' : 'default';
  noteEditor.contentEditable = noteEditor.contentEditable === 'true' ? 'false' : 'true';
  const body = document.querySelector('body');
  body.classList.toggle('omod') ? 'enable' : 'disable';
});
let globalTooltip;
document.addEventListener('DOMContentLoaded', () => {
  globalTooltip = document.createElement('div');
  globalTooltip.className = 'tooltip';
  document.body.appendChild(globalTooltip);
});
//add css style
function createCSSRules() {
  const buttonRules = {
    'tema': { content: `"${translate("theme")}"`, right: '-11px', top: '-35px', left: 'auto', transform: 'none' },
    'sync': { content: `"${translate("sync")}"`, top: '-35px', left: '50%', transform: 'translateX(-50%)' },
    'languege': { content: `"${translate("select_language")}"`, right: '-4px', top: '-35px', left: 'auto', transform: 'none' },
    'export': { content: `"${translate("save_all_data")}"`, top: '-37px', left: '-4px', transform: 'none' },
    'import': { content: `"${translate("upload_data")}"`, top: '-37px', left: '-4px', transform: 'none' },
    'omod_toggle': { content: `"${translate("reading_mode")}"!important`, right: '-6px', transform: 'none', left: 'auto' }
  };
  const editorButtons = { 'h1': translate("heading_1"), 'h2': translate("heading_2"), 'bold': translate("bold"), 'italic': translate("italic"), 'list-ul': translate("bulleted_list"), 'list-ol': translate("numbered_list"), 'strike': translate("strikethrough"), 'left': translate("align_left"), 'center': translate("align_center"), 'right': translate("align_right"), 'erase': translate("remove_formatting"), 'horizontalrule': translate("horizontal_line"), 'link': translate("add_link"), 'unlink': translate("remove_link"), 'html': translate("add_html"), 'table': translate("add_table"), 'select': translate("select_all"), 'kucult': translate("decrease_font_size"), 'buyut': translate("increase_font_size"), 'undo': translate("undo"), 'redo': translate("redo") };
  let cssText = '';
  Object.entries(buttonRules).forEach(([id, props]) => {
    cssText += `${id === 'omod_toggle' ? '' : 'button'}#${id}::before {`;
    Object.entries(props).forEach(([prop, value]) => { cssText += `${prop}:${value};`; }); cssText += '}';
  });
  Object.entries(editorButtons).forEach(([name, text]) => { cssText += `button.${name}-button::before{content:"${text}";}`; });
  const style = document.createElement('style');
  style.textContent = cssText;
  document.head.appendChild(style);
}
createCSSRules();

document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('sync') === '1') {
    document.querySelector('button#sync').classList.add('aktif');
  }
  const SPECIAL_KEYS = new Set([
    'sidebarState', 'thizaState', 'tema', 'gistFile', 'gistId', 'gistToken',
    'hasSelectedLanguage', 'selectedLanguage', 'sync'
  ]);
  const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) return true;
    if (obj1 == null || obj2 == null) return false;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return obj1 === obj2;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    return keys1.every(key => keys2.includes(key) && deepEqual(obj1[key], obj2[key]));
  };
  const getLocalStorageData = () => {
    const localData = {};
    for (const [key, value] of Object.entries(localStorage)) {
      try {
        localData[key] = SPECIAL_KEYS.has(key) ? (value === 'null' ? null : value) : JSON.parse(value);
      } catch (e) {
        localData[key] = value;
      }
    }
    return localData;
  };
  const clearOrderKeys = () => {
    Object.keys(localStorage)
      .filter(key => key.startsWith('noteOrder-') || key.startsWith('taskOrder-'))
      .forEach(key => localStorage.removeItem(key));
  };
  const saveDataToLocalStorage = (data) => {
    Object.entries(data).forEach(([key, value]) => {
      localStorage.setItem(key, SPECIAL_KEYS.has(key) ? (value === null ? 'null' : value) : JSON.stringify(value));
    });
  };
  const loadDataFromGist = async () => {
    if (sessionStorage.getItem('justSynced') === 'true') {
      console.log('Sayfa zaten senkronize edildi, döngü engellendi.');
      sessionStorage.removeItem('justSynced');
      return;
    }
    if (localStorage.getItem('sync') !== '1') {
      console.log('Sync değeri 1 değil, Gist\'ten veri yükleme yapılmadı.');
      return;
    }
    const gistId = localStorage.getItem('gistId');
    const gistToken = localStorage.getItem('gistToken');
    const gistFile = localStorage.getItem('gistFile');
    if (!gistId || !gistToken || !gistFile) {
      console.log('Gist bilgileri eksik, otomatik senkronizasyon yapılamıyor.');
      return;
    }
    try {
      const response = await fetch(`https://api.github.com/gists/${gistId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${gistToken}`,
          Accept: 'application/vnd.github.v3+json'
        },
        cache: 'no-store'
      });
      if (!response.ok) {
        console.log('Gist\'ten veri çekme başarısız');
        if (localStorage.getItem('sync') === '1') {
          document.querySelector('button#sync').classList.remove('aktif');
          alert(translate("sync_failed_or_no_data_on_server_check_setup_info"));
          localStorage.setItem('sync', '0');
        }
        return;
      }
      const gistData = await response.json();
      if (!gistData.files?.[gistFile]) {
        throw new Error(`Belirtilen dosya '${gistFile}' Gist içinde bulunamadı.`);
      }
      const gistParsedData = JSON.parse(gistData.files[gistFile].content);
      const localData = getLocalStorageData();
      if (deepEqual(gistParsedData, localData)) {
        console.log('Gist\'teki veriler localStorage ile aynı, yükleme yapılmadı.');
        return;
      }
      clearOrderKeys();
      saveDataToLocalStorage(gistParsedData);
      console.log('Gist\'ten veriler başarıyla yüklendi');
      sessionStorage.setItem('justSynced', 'true');
      location.reload();
    } catch (error) {
      console.log('Gist\'ten veri yükleme hatası:', error);
      if (localStorage.getItem('sync') === '1') {
        document.querySelector('button#sync').classList.remove('aktif');
        setTimeout(() => {
          alert(translate("sync_failed_or_no_data_on_server_check_setup_info"));
          localStorage.setItem('sync', '0');
        }, 150);
      }
    }
  };
  setTimeout(() => {
    loadDataFromGist();
  }, 150);

  //languege
  const languageButton = document.getElementById("languege");
  const languages = [{ name: "العربية", code: "AR" }, { name: "Deutsch", code: "DE" }, { name: "English", code: "EN" }, { name: "Español", code: "ES" }, { name: "فارسی", code: "FA" }, { name: "Français", code: "FR" }, { name: "हिन्दी", code: "HI" }, { name: "Indonesian", code: "ID" }, { name: "Italiano", code: "IT" }, { name: "日本語", code: "JA" }, { name: "한국어", code: "KO" }, { name: "Kiswahili", code: "SW" }, { name: "Polski", code: "PL" }, { name: "Português", code: "PT" }, { name: "Русский", code: "RU" }, { name: "Tiếng Việt", code: "VI" }, { name: "Türkçe", code: "TR" }, { name: "اردو", code: "UR" }, { name: "Oʻzbekcha", code: "UZ" }, { name: "中文", code: "ZH" }, { name: "Nederlands", code: "NL" }, { name: "Svenska", code: "SV" }, { name: "Ελληνικά", code: "EL" }, { name: "Čeština", code: "CS" }, { name: "Magyar", code: "HU" }, { name: "Română", code: "RO" }, { name: "Български", code: "BG" }, { name: "Dansk", code: "DA" }, { name: "Suomi", code: "FI" }, { name: "Slovenščina", code: "SL" }];
  let selectLangCode = localStorage.getItem("selectedLanguage") || "EN";
  let selectedLanguage = languages.find(lang => lang.code === selectLangCode)?.name || "English";
  document.documentElement.lang = selectLangCode.toLowerCase();
  const isFirstVisit = localStorage.getItem("hasSelectedLanguage") !== "true";
  let modal_dil;
  let secondModal;
  function createMainModal() {
    modal_dil = document.createElement("div");
    modal_dil.className = "modal";
    modal_dil.innerHTML = `
        <div class="modal_dil-content">
            <div class="gecerli_dil">${selectedLanguage}</div>
            <div id="arrow" class="dili_degistir">${translate("change_language")}</div>
            <button class="close_main_modal">${translate("close_button")}</button>
        </div>
    `;
    document.body.appendChild(modal_dil);
    modal_dil.querySelector(".dili_degistir").addEventListener("click", createLanguageSelectionModal);
    modal_dil.querySelector(".close_main_modal").addEventListener("click", function () {
      if (isFirstVisit) {
        localStorage.setItem("selectedLanguage", "EN");
        localStorage.setItem("hasSelectedLanguage", "true");
      }
      modal_dil.style.display = "none";
    });
  }
  function createLanguageSelectionModal() {
    if (secondModal) secondModal.remove();
    secondModal = document.createElement("div");
    secondModal.className = "modal";
    let modalContent = `<div class="modal_dil-content2">`;
    const sortedLanguages = [...languages].sort((a, b) => {
      return a.code === selectLangCode ? -1 : b.code === selectLangCode ? 1 : 0;
    });
    sortedLanguages.forEach(lang => {
      modalContent += `
            <label class="checkbox-design">
                <input type="checkbox" name="language" value="${lang.code}" ${lang.code === selectLangCode ? "checked" : ""}>
                <span class="checkbox-square"></span>${lang.name}
            </label>
        `;
    });
    modalContent += `</div>`;
    secondModal.innerHTML = modalContent;
    document.body.appendChild(secondModal);
    document.querySelectorAll('input[name="language"]').forEach(input => {
      input.addEventListener("change", saveLanguage);
    });
  }
  function saveLanguage(event) {
    selectLangCode = event.target.value;
    selectedLanguage = languages.find(lang => lang.code === selectLangCode)?.name || "English";
    localStorage.setItem("selectedLanguage", selectLangCode);
    localStorage.setItem("hasSelectedLanguage", "true");
    setTimeout(() => { updateGist(); }, 200);
    modal_dil.querySelector(".gecerli_dil").textContent = selectedLanguage;
    document.documentElement.lang = selectLangCode.toLowerCase();
    modal_dil.querySelector(".close_main_modal").textContent = translate("close_button");
    modal_dil.querySelector(".dili_degistir").textContent = translate("change_language");
    secondModal.remove();
    modal_dil.remove();
    setTimeout(() => { location.reload(); }, 1600);
  }
  languageButton.addEventListener("click", function () {
    if (!modal_dil) {
      createMainModal();
    }
    modal_dil.style.display = "flex";
  });
  if (isFirstVisit) {
    createMainModal();
    modal_dil.style.display = "flex";
  }
  //toggle sidebar button
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.add('initialized');
  document.getElementById('toggle-sidebar-button').classList.add('initialized');
  sidebar.classList.toggle('collapsed', localStorage.getItem('sidebarState') === 'collapsed');

  document.getElementById('toggle-sidebar-button').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.width = '220px';
    localStorage.setItem('sidebarState', sidebar.classList.toggle('collapsed') ? 'collapsed' : 'expanded');
    updateGist();
  });
  const geriNotebar = document.getElementsByClassName('geriNotebar')[0];
  const geriContent = document.getElementsByClassName('geriContent')[0];
  const noteContent = document.getElementsByClassName('note-content')[0];
  const noteContentIc = document.getElementsByClassName('note-content-ic')[0];
  const noteBar = document.getElementsByClassName('notebar')[0];
  const arkaplan = document.getElementsByClassName('arkaplan')[0];
  const categoryList = document.getElementById('category-list');
  const sidebarButton = document.getElementById('toggle-sidebar-button');
  const noteList = document.getElementById('note-list');
  const noteEditor = document.getElementById('note-editor');
  const noteTitleInput = document.getElementById('note-title');
  const noteSearchInput = document.getElementById('note-search');
  const noteContentSearchInput = document.getElementById('note-content-search');
  noteSearchInput.placeholder = translate("search_note");
  noteContentSearchInput.placeholder = translate("search_in_note_content");
  noteTitleInput.placeholder = translate("note_title");
  const saveStatus = document.getElementById('save-status');
  const saveNoteButton = document.getElementById('save-note-button');
  saveNoteButton.textContent = translate("save");
  const deleteNoteButton = document.getElementById('delete-note-button');
  deleteNoteButton.textContent = translate("delete");
  const addCategoryButton = document.getElementById('add-category-button');
  addCategoryButton.textContent = translate("category");
  const addNoteButton = document.getElementById('add-note-button');
  addNoteButton.textContent = translate("note");
  const addTaskButton = document.getElementById('add-task-button');
  addTaskButton.textContent = translate("task");
  let notes = [];
  let categories = [];
  let selectedNote = null;
  let selectedCategory = null;
  //tema ayarları
  const temaDegis = document.getElementById('tema');
  let currentTheme = localStorage.getItem('tema');
  temaDegis.addEventListener('click', () => {
    if (currentTheme === 'light') {
      currentTheme = 'dark';
    } else {
      currentTheme = 'light';
    }
    localStorage.setItem('tema', currentTheme);
    document.body.className = currentTheme;
    updateGist();
  });

  function handleWindowResize() {
    const getNotes = localStorage.getItem('notes');
    const windowWidth = window.innerWidth;
    if (windowWidth < 1000) {
      sidebar.style.width = '100%';
      noteBar.style.visibility = 'hidden';
      noteBar.style.display = 'none';
      noteContentIc.style.display = 'none';
      noteContent.style.display = 'none';
      sidebarButton.style.display = 'none';
    } else {
      sidebar.style.display = 'grid';
      sidebar.style.width = '220px';
      noteBar.style.visibility = 'visible';
      noteBar.style.display = 'grid';
      sidebarButton.style.display = 'block';
      if (getNotes && getNotes.length > 0) {
        noteContentIc.style.display = 'block';
      } else {
        noteContentIc.style.display = 'none';
      }
      noteContent.style.display = 'block';
    }
  }
  window.addEventListener('resize', handleWindowResize);
  window.addEventListener('DOMContentLoaded', handleWindowResize);

  function loadData() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      notes = JSON.parse(savedNotes);
    }
    const savedCategories = localStorage.getItem('categories');
    if (savedCategories) {
      categories = JSON.parse(savedCategories);
    }
    const savedCategoryOrder = localStorage.getItem('categoryOrder');
    if (savedCategoryOrder) {
      const order = JSON.parse(savedCategoryOrder);
      categories.sort((a, b) => {
        return order.indexOf(a.id.toString()) - order.indexOf(b.id.toString());
      });
    }
    renderCategories();
    if (categories.length > 0) {
      selectedCategory = categories[0];
      const firstCategoryElement = document.querySelector(`.category-item[data-id="${selectedCategory.id}"]`);
      if (firstCategoryElement) {
        firstCategoryElement.classList.add('selected');
      }
      const categoryNotes = notes.filter(note => note.categories.includes(selectedCategory.id));
      const savedNoteOrder = localStorage.getItem(`noteOrder-${selectedCategory?.id}`);
      if (savedNoteOrder) {
        const noteOrder = JSON.parse(savedNoteOrder);
        categoryNotes.sort((a, b) => {
          return noteOrder.indexOf(a.id.toString()) - noteOrder.indexOf(b.id.toString());
        });
      } else {
        categoryNotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }
      if (categoryNotes.length > 0) {
        selectedNote = categoryNotes[0];
        noteEditor.innerHTML = '';
        noteTitleInput.value = '';
        loadNoteContent();
        renderNotes();
        const firstNoteElement = document.querySelector(`.note-item[data-id="${selectedNote.id}"]`);
        if (firstNoteElement) {
          firstNoteElement.classList.add('selected');
        }
      } else {
        window.addEventListener('resize', () => {
          const windowWidth = window.innerWidth;
          if (windowWidth > 1000) {
            noteBar.style.visibility = 'visible';
            noteBar.style.display = 'grid';
            sidebar.style.display = 'grid';
            sidebar.style.width = '220px';
            noteContentIc.style.display = 'block';
            noteContent.style.display = 'block';
          } else {
            sidebar.style.width = '100%';
            noteBar.style.visibility = 'hidden';
            noteBar.style.display = 'none';
            noteContentIc.style.display = 'none';
            noteContent.style.display = 'none';
          }
        });
        window.dispatchEvent(new Event('resize'));
        noteContentIc.style.display = 'none';
        noteEditor.innerHTML = '';
        noteTitleInput.value = '';
        document.getElementById('note-created-date').textContent = '';
        renderNotes();
      }
    } else {
      noteBar.style.visibility = 'visible';
      noteBar.style.display = 'grid';
      noteContentIc.style.display = 'none';
      noteEditor.innerHTML = '';
      noteTitleInput.value = '';
      document.getElementById('note-created-date').textContent = '';
    }
    setupResizer('.resizer');
    arkaplan.style.display = 'block';

    geriNotebar.textContent = translate("back");
    geriContent.textContent = translate("back");

    geriNotebar.addEventListener('click', () => {
      sidebar.style.width = '100%';
      sidebar.style.display = 'grid';
      noteBar.style.visibility = 'hidden';
      noteBar.style.display = 'none';
      noteContentIc.style.display = 'none';
      noteContent.style.display = 'none';
    });

    geriContent.addEventListener('click', () => {
      noteBar.style.visibility = 'visible';
      noteBar.style.display = 'grid';
      noteBar.style.width = '100%';
      noteContentIc.style.display = 'none';
      noteContent.style.display = 'none';
    });
  }
  function saveData(showMessage = true) {
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('categories', JSON.stringify(categories));
    if (showMessage) {
      saveStatus.textContent = translate("saved");
      saveStatus.style.display = 'block';
      setTimeout(() => {
        saveStatus.textContent = '';
        saveStatus.style.display = 'none';
      }, 2000);
    }
    updateGist();
  }
  function renderCategories() {
    categoryList.innerHTML = '';
    const savedCategoryOrder = localStorage.getItem('categoryOrder');
    if (savedCategoryOrder) {
      const order = JSON.parse(savedCategoryOrder);
      categories.sort((a, b) => {
        return order.indexOf(a.id.toString()) - order.indexOf(b.id.toString());
      });
    }
    const tooltip = globalTooltip;
    let tooltipTimeout;

    categories.forEach((category) => {
      const li = document.createElement('li');
      li.dataset.id = category.id;
      li.dataset.type = 'category';
      li.classList.add('category-item');
      if (selectedCategory && selectedCategory.id === category.id) {
        li.classList.add('selected');
      }
      const categoryNameSpan = document.createElement('span');
      categoryNameSpan.textContent = category.name;
      categoryNameSpan.id = 'renk' + category.color;
      li.appendChild(categoryNameSpan);
      li.addEventListener('mouseenter', () => {
        clearTimeout(tooltipTimeout);
        const spanContent = li.querySelector('span').textContent;
        function toArabicNumerals(num) {
          const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
          return num.toString().split('').map(digit => arabicNumbers[digit]).join('');
        }
        const noteCount = notes.filter(note => note.categories.includes(category.id)).length;
        const arabicNoteCount = toArabicNumerals(noteCount);
        if (document.documentElement.lang === "ar" || document.documentElement.lang === "fa") {
          tooltip.textContent = `${spanContent} | ${arabicNoteCount} ${translate("note")}`;
        } else {
          tooltip.textContent = `${spanContent} | ${noteCount} ${translate("note")}`;
        }
        const rect = li.getBoundingClientRect();
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 0}px`;
        if (document.documentElement.lang === "ar" || document.documentElement.lang === "fa") {
          tooltip.style.left = `${rect.right + window.scrollX - tooltip.offsetWidth}px`;
        } else {
          tooltip.style.left = `${rect.left + window.scrollX}px`;
        }
        tooltip.style.transition = 'none';
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateY(-10px)';
        tooltip.style.visibility = 'hidden';
        tooltipTimeout = setTimeout(() => {
          tooltip.style.transition = 'transform 0.4s ease, opacity 0.4s ease, visibility 0.4s ease';
          tooltip.style.opacity = '1';
          tooltip.style.visibility = 'visible';
          tooltip.style.transform = 'translateY(0)';
        }, 100);
      });

      li.addEventListener('mouseleave', () => {
        clearTimeout(tooltipTimeout);
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
        tooltip.style.transform = 'translateY(-10px)';
      });
      li.addEventListener('click', () => {
        document.querySelectorAll('.category-item').forEach(catItem => {
          catItem.classList.remove('selected');
        });
        li.classList.add('selected');
        window.addEventListener('resize', () => {
          const windowWidth = window.innerWidth;
          if (windowWidth < 1000) {
            sidebar.style.display = 'none';
            noteBar.style.visibility = 'visible';
            noteBar.style.display = 'grid';
            noteBar.style.width = '100%';
            noteContentIc.style.display = 'none';
            noteContent.style.display = 'none';
          } else {
            sidebar.style.display = 'grid';
            noteBar.style.visibility = 'visible';
            noteBar.style.display = 'grid';
            noteBar.style.width = '220px';
            noteContentIc.style.display = 'block';
            noteContent.style.display = 'block';
          }
        });
        window.dispatchEvent(new Event('resize'));

        noteContentSearchInput.value = '';
        noteSearchInput.value = '';
        selectedCategory = category;
        renderNotes();
        const categoryNotes = notes.filter(note => note.categories.includes(category.id));
        const savedNoteOrder = localStorage.getItem(`noteOrder-${selectedCategory?.id}`);
        if (savedNoteOrder) {
          const noteOrder = JSON.parse(savedNoteOrder);
          categoryNotes.sort((a, b) => {
            return noteOrder.indexOf(a.id.toString()) - noteOrder.indexOf(b.id.toString());
          });
        } else {
          categoryNotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        if (categoryNotes.length > 0) {
          selectedNote = categoryNotes[0];
          loadNoteContent();
          noteContentIc.style.display = 'block';
          const firstNoteElement = document.querySelector('.note-item');
          if (firstNoteElement) {
            document.querySelectorAll('.note-item').forEach(noteItem => {
              noteItem.classList.remove('selected');
            });
            firstNoteElement.classList.add('selected');
          }
        } else {
          noteContentIc.style.display = 'none';
          selectedNote = null;
          noteEditor.innerHTML = '';
          noteTitleInput.value = '';
          document.getElementById('note-created-date').textContent = '';
        }
      });

      const editButton = document.createElement('button');
      editButton.innerHTML = `<svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
      editButton.classList.add('category-edit-buttons');
      editButton.addEventListener('click', (event) => {
        event.stopPropagation();
        editCategory(category);
      });
      li.appendChild(editButton);
      categoryList.appendChild(li);
    });
    enableDragAndDrop('.sortable1', 'category-list', updateCategoryOrder);
  }
  function renderNotes() {
    noteList.innerHTML = '';
    let filteredNotes = notes;
    if (document.documentElement.lang === "tr") {
      var searchTerm = noteSearchInput.value.turkishToLower();
      var contentSearchTerm = noteContentSearchInput.value.turkishToLower();
    } else {
      var searchTerm = noteSearchInput.value.toLowerCase();
      var contentSearchTerm = noteContentSearchInput.value.toLowerCase();
    }
    if (searchTerm || contentSearchTerm) {
      filteredNotes = notes;
      if (searchTerm) {
        noteBar.style.visibility = 'visible';
        noteBar.style.display = 'grid';
        filteredNotes = filteredNotes.filter(note => {
          if (document.documentElement.lang === "tr") {
            var cleanTitle = stripHtmlTags(note.title).turkishToLower();
          } else {
            var cleanTitle = stripHtmlTags(note.title).toLowerCase();
          }
          return cleanTitle.includes(searchTerm);
        });
      } else {
        noteContentIc.style.display = 'none';
      }
      if (contentSearchTerm) {
        noteSearchInput.value = '';
        filteredNotes = filteredNotes.filter(note => {
          if (document.documentElement.lang === "tr") {
            var cleanContent = stripHtmlTags(note.content).turkishToLower();
          } else {
            var cleanContent = stripHtmlTags(note.content).toLowerCase();
          }
          return cleanContent.includes(contentSearchTerm);
        });
      }
    } else if (selectedCategory) {
      filteredNotes = filteredNotes.filter(note => {
        return note.categories.includes(selectedCategory.id);
      });
    }
    const savedNoteOrder = localStorage.getItem(`noteOrder-${selectedCategory?.id}`);
    if (savedNoteOrder) {
      const noteOrder = JSON.parse(savedNoteOrder);
      filteredNotes.sort((a, b) => {
        return noteOrder.indexOf(a.id.toString()) - noteOrder.indexOf(b.id.toString());
      });
    } else {
      filteredNotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    const tooltip = globalTooltip;
    let tooltipTimeout;
    filteredNotes.forEach((note) => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${note.title}</span>`;
      li.dataset.id = note.id;
      li.dataset.type = 'note';
      li.classList.add('note-item');
      li.querySelector('span').id = 'renk' + note.color;
      if (selectedNote && selectedNote.id === note.id) {
        li.classList.add('selected');
      }
      li.addEventListener('mouseenter', () => {
        clearTimeout(tooltipTimeout);
        const spanContent = li.querySelector('span').textContent;
        tooltip.textContent = `${spanContent}`;
        const rect = li.getBoundingClientRect();
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 0}px`;
        if (document.documentElement.lang === "ar" || document.documentElement.lang === "fa") {
          tooltip.style.left = `${rect.right + window.scrollX - tooltip.offsetWidth}px`;
        } else {
          tooltip.style.left = `${rect.left + window.scrollX}px`;
        }
        tooltip.style.transition = 'none';
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateY(-10px)';
        tooltip.style.visibility = 'hidden';
        tooltipTimeout = setTimeout(() => {
          tooltip.style.transition = 'transform 0.4s ease, opacity 0.4s ease, visibility 0.4s ease';
          tooltip.style.opacity = '1';
          tooltip.style.visibility = 'visible';
          tooltip.style.transform = 'translateY(0)';
        }, 100);
      });
      li.addEventListener('mouseleave', () => {
        clearTimeout(tooltipTimeout);
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
        tooltip.style.transform = 'translateY(-10px)';
      });
      li.addEventListener('click', () => {
        document.querySelectorAll('.note-item').forEach(noteItem => {
          noteItem.classList.remove('selected');
        });
        li.classList.add('selected');
        selectedNote = note;
        const noteCategory = categories.find(cat => note.categories.includes(cat.id));
        if (noteCategory) {
          document.querySelectorAll('.category-item').forEach(catItem => {
            catItem.classList.remove('selected');
          });
          const categoryElement = document.querySelector(`.category-item[data-id="${noteCategory.id}"]`);
          if (categoryElement) {
            categoryElement.classList.add('selected');
          }
          selectedCategory = noteCategory;
          renderCategories();
        }
        loadNoteContent();
        noteContentIc.style.display = 'block';
        window.addEventListener('resize', () => {
          const windowWidth = window.innerWidth;
          if (windowWidth < 1000) {
            noteContent.style.display = 'block';
            noteContentIc.style.display = 'block';
            noteBar.style.visibility = 'hidden';
            noteBar.style.display = 'none';
          }
        });
        window.dispatchEvent(new Event('resize'));
      });
      const editButton = document.createElement('button');
      editButton.innerHTML = `<svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
      editButton.classList.add('category-edit-buttons');
      editButton.addEventListener('click', (event) => {
        event.stopPropagation();
        editNote(note);
      });
      li.appendChild(editButton);
      noteList.appendChild(li);
    });
    enableDragAndDrop('.sortable2', 'note-list', updateNoteOrder);
  }
  function addCategory() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modal-content">
     <label for="newCategoryName">${translate("category_name")}:</label>
      <input type="text" id="newCategoryName">
      <div class="colors">
        <div class="color-option" style="background-color: #b1653d;" data-color="b1653d"></div>
        <div class="color-option" style="background-color: #9a900b;" data-color="9a900b"></div>
        <div class="color-option" style="background-color: #6c8f20;" data-color="6c8f20"></div>
        <div class="color-option" style="background-color: #1490b5;" data-color="1490b5"></div>
        <div class="color-option" style="background-color: #1b86f2;" data-color="1b86f2"></div>
        <div class="color-option" style="background-color: #527cf8;" data-color="527cf8"></div>
        <div class="color-option" style="background-color: #8772ff;" data-color="8772ff"></div>
        <div class="color-option" style="background-color: #b34e99;" data-color="b34e99"></div>
        <div class="color-option" style="background-color: #bb4141;" data-color="bb4141"></div>
      </div>
      <button id="confirmDelete">${translate("add")}</button>
      <button id="cancelDelete">${translate("cancel")}</button>
    </div>
  `;
    document.body.appendChild(modal);
    const newCategoryNameInput = document.getElementById('newCategoryName');
    const confirmDelete = document.getElementById('confirmDelete');
    const cancelDelete = document.getElementById('cancelDelete');
    const colorOptions = document.querySelectorAll('.color-option');
    let selectedColor = 'b1653d'; // varsayılan renk
    colorOptions.forEach(option => {
      option.addEventListener('click', () => {
        document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedColor = option.getAttribute('data-color');
      });
    });
    colorOptions[0].classList.add('selected');
    newCategoryNameInput.focus();
    confirmDelete.addEventListener('click', () => {
      const categoryName = newCategoryNameInput.value.trim();
      if (!categoryName) {
        alert(translate("cat_name_empty"));
        return;
      }
      const newCategory = {
        id: Date.now(),
        name: categoryName,
        color: selectedColor
      };
      categories.unshift(newCategory);
      selectedCategory = newCategory;
      saveData(false);
      renderCategories();
      renderNotes();
      const windowWidth = window.innerWidth;
      if (windowWidth > 1000) {
        noteBar.style.visibility = 'visible';
        noteBar.style.display = 'grid';
      }
      noteContentIc.style.display = 'none';
      document.body.removeChild(modal);
    });
    cancelDelete.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
    newCategoryNameInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        confirmDelete.click();
      }
    });
  }
  function renderTasks(tabType, taskDiv) {
    const taskList = document.querySelector('.task-list');
    if (taskList) {
      taskList.remove();
    }
    const taskListContainer = document.createElement('div');
    taskListContainer.classList.add('task-list');

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const createTaskList = () => {
      if (tabType === 'active' || tabType === 'completed') {
        let tasksToShow = [];
        const tasksCopy = JSON.parse(JSON.stringify(selectedNote.task_content));
        tasksCopy.forEach((task, taskIndex) => {
          if (tabType === 'active') {
            if (task.task_completed === 0 || (task.subTasks && task.subTasks.some(subTask => subTask.task_completed === 0))) {
              tasksToShow.push({ ...task, originalTaskIndex: taskIndex });
            }
          } else { // tabType === 'completed'
            if (task.task_completed === 1) {
              tasksToShow.push({ ...task, originalTaskIndex: taskIndex });
            } else {
              task.subTasks.forEach((subTask, subTaskIndex) => {
                if (subTask.task_completed === 1) {
                  tasksToShow.push({
                    ...task,
                    name: subTask.name,
                    date: subTask.date,
                    task_completed: subTask.task_completed,
                    isSubTask: true,
                    originalTaskIndex: taskIndex,
                    originalSubTaskIndex: subTaskIndex,
                    subTasks: [],
                    id: subTask.id // Alt görevin kendi ID'sini ekle
                  });
                }
              });
            }
          }
        });
        return tasksToShow;
      } else {
        let tasksToShow = [];
        const tasksCopy = JSON.parse(JSON.stringify(selectedNote.task_content));

        tasksCopy.forEach((task, taskIndex) => {
          const taskDate = task.date ? new Date(task.date) : null;
          taskDate?.setHours(0, 0, 0, 0);

          const isTaskMatch = task.task_completed === 0 && taskDate && (
            (tabType === 'today' && taskDate.getTime() === today.getTime()) ||
            (tabType === 'overdue' && taskDate < today)
          );

          const matchingSubtasks = task.subTasks.filter(subTask => {
            const subTaskDate = subTask.date ? new Date(subTask.date) : null;
            subTaskDate?.setHours(0, 0, 0, 0);
            return subTask.task_completed === 0 && subTaskDate && (
              (tabType === 'today' && subTaskDate.getTime() === today.getTime()) ||
              (tabType === 'overdue' && subTaskDate < today)
            );
          });

          if (isTaskMatch) {
            const taskToAdd = {
              ...task,
              originalTaskIndex: taskIndex,
              subTasks: task.subTasks
            };
            tasksToShow.push(taskToAdd);
          }

          if (matchingSubtasks.length > 0 && !isTaskMatch) {
            matchingSubtasks.forEach(subTask => {
              const subTaskDate = new Date(subTask.date);
              subTaskDate.setHours(0, 0, 0, 0);

              if (!taskDate || subTaskDate.getTime() !== taskDate.getTime()) {
                tasksToShow.push({
                  ...task,
                  name: subTask.name,
                  date: subTask.date,
                  task_completed: subTask.task_completed,
                  isSubTask: true,
                  originalTaskIndex: taskIndex,
                  originalSubTaskIndex: task.subTasks.findIndex(st => st.name === subTask.name && st.date === subTask.date),
                  subTasks: [],
                  id: subTask.id // Alt görevin kendi ID'sini ekle
                });
              }
            });
          }
        });

        return tasksToShow;
      }
    };

    const filteredTasks = createTaskList();
    const savedTaskOrder = localStorage.getItem(`taskOrder-${tabType}-${selectedNote.id}`);
    let taskOrder = savedTaskOrder ? JSON.parse(savedTaskOrder).map(id => String(id)) : [];
    filteredTasks.forEach(task => {
      task.id = String(task.id);
    });
    taskOrder = taskOrder.filter(id => filteredTasks.some(task => task.id === id));
    if (taskOrder.length > 0) {
      filteredTasks.sort((a, b) => {
        const indexA = taskOrder.indexOf(a.id);
        const indexB = taskOrder.indexOf(b.id);
        return indexA - indexB;
      });
    }

    filteredTasks.forEach(task => {
      const taskItemContainer = document.createElement('div');
      taskItemContainer.classList.add('task_list_container');
      taskItemContainer.dataset.id = task.isSubTask ? task.id : task.id; // Alt görevse kendi ID'sini kullan
      taskItemContainer.dataset.type = task.isSubTask ? 'subtask' : 'task'; // Türü ayarla
      const task_date_div = document.createElement('div');
      task_date_div.classList.add('task_date_div');

      const taskspan = document.createElement('span');
      taskspan.id = 'renk' + task.color;
      taskspan.addEventListener('click', () => {
        toggleTaskCompletion(task);
        taskItemContainer.remove();
        highlightTabsWithContent();
      });

      const taskdiv = document.createElement('div');
      taskdiv.textContent = task.name;

      const datediv = document.createElement('div');
      datediv.classList.add('date_div');

      const togglediv = document.createElement('div');
      togglediv.classList.add('togglediv');

      datediv.textContent = task.date ? (new Date(task.date).toDateString() === new Date().toDateString() ? translate("today") : (new Date(task.date).toDateString() === new Date(new Date().setDate(new Date().getDate() + 1)).toDateString() ? translate("tomorrow") : `${new Date(task.date).getDate()} ${new Date(task.date).toLocaleString(document.documentElement.lang, { month: 'short' })}` || '')) : '';
      const edit_delete_div = document.createElement('div');
      edit_delete_div.classList.add('edit_delete_div');

      if (tabType === 'active' || tabType === 'today' || tabType === 'overdue') {
        const editButton = document.createElement('button');
        editButton.classList.add('edit-task-button');
        editButton.addEventListener('click', () => {
          if (task.isSubTask) {
            const originalTask = selectedNote.task_content[task.originalTaskIndex];
            const originalSubTask = originalTask.subTasks[task.originalSubTaskIndex];
            openSubTaskModalForEdit(originalTask, originalSubTask);
          } else {
            const originalTask = selectedNote.task_content[task.originalTaskIndex];
            openTaskModalForEdit(originalTask);
          }
        });
        edit_delete_div.appendChild(editButton);
      }
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-task-button');
      deleteButton.addEventListener('click', () => {
        if (confirm(translate("are_you_sure_delete_task"))) {
          if (task.isSubTask) {
            deleteSubTask(task, task);
          } else {
            deleteTask(task);
          }
          taskItemContainer.remove();
        }
      });
      edit_delete_div.appendChild(deleteButton);

      const subTasksContainer = document.createElement('div');
      subTasksContainer.classList.add('subtasks_list_container');
      if (!task.isSubTask) {
        task.subTasks.forEach(subTask => {
          let showSubTask = false;
          if (tabType === 'active' && subTask.task_completed === 0) {
            showSubTask = true;
          } else if (tabType === 'completed' && subTask.task_completed === 1) {
            showSubTask = true;
          } else if (tabType === 'today' || tabType === 'overdue') {
            const subTaskDate = new Date(subTask.date);
            subTaskDate?.setHours(0, 0, 0, 0);
            showSubTask = subTask.task_completed === 0 && (
              (tabType === 'today' && subTaskDate?.getTime() === today.getTime()) ||
              (tabType === 'overdue' && subTaskDate < today)
            );
          }
          if (showSubTask) {
            const subtaskspan = document.createElement('span');
            subtaskspan.id = 'renk' + task.color;
            const subTaskdiv = document.createElement('div');
            subTaskdiv.textContent = subTask.name;

            const subTaskDate = document.createElement('div');
            subTaskDate.classList.add('date_div');
            subTaskDate.textContent = subTask.date ? (new Date(subTask.date).toDateString() === new Date().toDateString() ? translate("today") : (new Date(subTask.date).toDateString() === new Date(new Date().setDate(new Date().getDate() + 1)).toDateString() ? translate("tomorrow") : `${new Date(subTask.date).getDate()} ${new Date(subTask.date).toLocaleString(document.documentElement.lang, { month: 'short' })}` || '')) : '';
            const sub_edit_delete_div = document.createElement('div');
            sub_edit_delete_div.classList.add('sub_edit_delete_div');

            if (tabType === 'active' || tabType === 'today' || tabType === 'overdue') {
              const subTaskEditButton = document.createElement('button');
              subTaskEditButton.classList.add('edit-subtask-button');
              subTaskEditButton.addEventListener('click', () => {
                const originalTask = selectedNote.task_content[task.originalTaskIndex];
                openSubTaskModalForEdit(originalTask, subTask);
              });
              sub_edit_delete_div.appendChild(subTaskEditButton);
            }

            const subTaskWrapper = document.createElement('div');
            subTaskWrapper.classList.add('subtask_list_wrapper');
            subTaskWrapper.dataset.id = subTask.id;
            subTaskWrapper.dataset.type = 'subtask';
            const subTaskDeleteButton = document.createElement('button');
            subTaskDeleteButton.classList.add('delete-subtask-button');
            subTaskDeleteButton.addEventListener('click', (e) => {
              e.stopPropagation();
              if (confirm(translate("are_you_sure_delete_task"))) {
                deleteSubTask(task, subTask);
                subTaskWrapper.remove();
                if (subTasksContainer.children.length === 0) { togglediv.remove(); }
              }
            });

            subtaskspan.addEventListener('click', () => {
              const originalTask = selectedNote.task_content[task.originalTaskIndex];
              const subTaskIndex = originalTask.subTasks.findIndex(st =>
                st.name === subTask.name && st.date === subTask.date && st.task_completed === subTask.task_completed
              );
              const originalSubTask = originalTask.subTasks[subTaskIndex];

              if (originalTask.task_completed === 1) {
                originalTask.task_completed = 0;
                originalTask.subTasks.forEach(sub => {
                  sub.task_completed = 0;
                });
                taskItemContainer.remove();
              } else {
                originalSubTask.task_completed = 1;
                subTaskWrapper.remove();
                if (subTasksContainer.children.length === 0) {
                  togglediv.remove();
                }
              }
              saveData(false);
              highlightTabsWithContent();
            });
            subTaskWrapper.appendChild(subtaskspan);
            subTaskWrapper.appendChild(subTaskdiv);
            subTaskWrapper.appendChild(subTaskDate);
            sub_edit_delete_div.appendChild(subTaskDeleteButton);
            subTaskWrapper.appendChild(sub_edit_delete_div);
            subTasksContainer.appendChild(subTaskWrapper);
          }
        });
      }

      task_date_div.appendChild(taskspan);
      task_date_div.appendChild(taskdiv);
      task_date_div.appendChild(datediv);
      edit_delete_div.appendChild(deleteButton);
      task_date_div.appendChild(edit_delete_div);
      taskItemContainer.appendChild(task_date_div);
      if (!task.isSubTask && subTasksContainer.children.length > 0) {
        task_date_div.appendChild(togglediv);
        taskItemContainer.appendChild(subTasksContainer);
      }
      taskListContainer.appendChild(taskItemContainer);
    });

    taskDiv.appendChild(taskListContainer);

    // Sürükle-bırak işlevselliğini etkinleştir
    enableDragAndDrop('.task-list', `task-list-${tabType}`, () => updateTaskOrder(tabType), '.task_list_container');
    enableDragAndDrop('.subtasks_list_container', `subtasks-list-${tabType}`, () => updateTaskOrder(tabType), '.subtask_list_wrapper');

    highlightTabsWithContent();
  }
  function highlightTabsWithContent() {
    // Get references to all tabs
    const activeTab = document.querySelector('.tab.active');
    const todayTab = document.querySelector('.tab.today');
    const overdueTab = document.querySelector('.tab.overdue');
    const completedTab = document.querySelector('.tab.completed');

    // Function to check if a tab type has content
    const hasContent = (tabType) => {
      // Create a temporary variable to store the filtered tasks
      let filteredTasks = [];

      // Copy tasks to work with
      const tasksCopy = JSON.parse(JSON.stringify(selectedNote.task_content));
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Check for content based on tab type
      if (tabType === 'active') {
        // Check for active tasks (non-completed tasks or tasks with non-completed subtasks)
        return tasksCopy.some(task =>
          task.task_completed === 0 ||
          (task.subTasks && task.subTasks.some(subTask => subTask.task_completed === 0))
        );
      }
      else if (tabType === 'completed') {
        // Check for completed tasks
        return tasksCopy.some(task =>
          task.task_completed === 1 ||
          (task.subTasks && task.subTasks.some(subTask => subTask.task_completed === 1))
        );
      }
      else if (tabType === 'today') {
        // Check for tasks due today
        return tasksCopy.some(task => {
          const taskDate = task.date ? new Date(task.date) : null;
          taskDate?.setHours(0, 0, 0, 0);

          // Check main task
          const isTaskMatch = task.task_completed === 0 && taskDate &&
            taskDate.getTime() === today.getTime();

          // Check subtasks
          const hasMatchingSubtask = task.subTasks.some(subTask => {
            const subTaskDate = subTask.date ? new Date(subTask.date) : null;
            subTaskDate?.setHours(0, 0, 0, 0);
            return subTask.task_completed === 0 && subTaskDate &&
              subTaskDate.getTime() === today.getTime();
          });

          return isTaskMatch || hasMatchingSubtask;
        });
      }
      else if (tabType === 'overdue') {
        // Check for overdue tasks
        return tasksCopy.some(task => {
          const taskDate = task.date ? new Date(task.date) : null;
          taskDate?.setHours(0, 0, 0, 0);

          // Check main task
          const isTaskMatch = task.task_completed === 0 && taskDate &&
            taskDate < today;

          // Check subtasks
          const hasMatchingSubtask = task.subTasks.some(subTask => {
            const subTaskDate = subTask.date ? new Date(subTask.date) : null;
            subTaskDate?.setHours(0, 0, 0, 0);
            return subTask.task_completed === 0 && subTaskDate &&
              subTaskDate < today;
          });

          return isTaskMatch || hasMatchingSubtask;
        });
      }

      return false;
    };

    // Check and highlight each tab if it has content
    if (activeTab && hasContent('active')) {
      activeTab.classList.add('active_light');
    } else if (activeTab) {
      activeTab.classList.remove('active_light');
    }

    if (todayTab && hasContent('today')) {
      todayTab.classList.add('today_light');
    } else if (todayTab) {
      todayTab.classList.remove('today_light');
    }

    if (overdueTab && hasContent('overdue')) {
      overdueTab.classList.add('overdue_light'); // Fixed the class name (removed space)
    } else if (overdueTab) {
      overdueTab.classList.remove('overdue_light');
    }

    if (completedTab && hasContent('completed')) {
      completedTab.classList.add('completed_light'); // Fixed the class name (removed space)
    } else if (completedTab) {
      completedTab.classList.remove('completed_light');
    }
  }
  function loadNoteContent() {
    if (selectedNote) {
      noteEditor.innerHTML = selectedNote.content;
      noteTitleInput.value = selectedNote.title;
      const createdAtDate = new Date(selectedNote.createdAt);
      const day = String(createdAtDate.getDate()).padStart(2, '0');
      const month = String(createdAtDate.getMonth() + 1).padStart(2, '0');
      const year = createdAtDate.getFullYear();
      const hours = String(createdAtDate.getHours()).padStart(2, '0');
      const minutes = String(createdAtDate.getMinutes()).padStart(2, '0');
      const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
      document.getElementById('note-created-date').textContent = `${formattedDate}`;
      if (selectedNote.task_content) {
        setupTaskUI();
        const taskDiv = document.querySelector('.task_div');
        const tabsContainer = document.createElement('div');
        tabsContainer.classList.add('tabs-container');

        const activeTab = document.createElement('button');
        activeTab.textContent = translate("active");
        activeTab.classList.add('tab', 'active', 'active-tab');
        activeTab.addEventListener('click', () => switchTab('active'));

        const todayTab = document.createElement('button');
        todayTab.textContent = translate("today");
        todayTab.classList.add('tab', 'today');
        todayTab.addEventListener('click', () => switchTab('today'));

        const overdueTab = document.createElement('button');
        overdueTab.textContent = translate("overdue");
        overdueTab.classList.add('tab', 'overdue');
        overdueTab.addEventListener('click', () => switchTab('overdue'));

        const completedTab = document.createElement('button');
        completedTab.textContent = translate("completed");
        completedTab.classList.add('tab', 'completed');
        completedTab.addEventListener('click', () => switchTab('completed'));

        tabsContainer.appendChild(activeTab);
        tabsContainer.appendChild(todayTab);
        tabsContainer.appendChild(overdueTab);
        tabsContainer.appendChild(completedTab);

        taskDiv.appendChild(tabsContainer);

        tabsContainer.insertAdjacentHTML('afterend', `<button class="delete-all-completed-button" style="display:none;">${translate("delete_all")}</button>`);
        const deleteAllCompletedButton = document.querySelector('.delete-all-completed-button');
        deleteAllCompletedButton.addEventListener('click', () => {
          if (confirm(translate("are_you_sure_delete_all_completed_tasks"))) {
            // Tamamlanmış görevleri ve alt görevleri temizle
            selectedNote.task_content.forEach(task => {
              if (task.subTasks) {
                task.subTasks = task.subTasks.filter(subTask => subTask.task_completed === 0);
              }
            });
            selectedNote.task_content = selectedNote.task_content.filter(task => {
              return !(task.task_completed === 1 && (!task.subTasks || task.subTasks.length === 0));
            });

            // taskOrder-completed anahtarını sil
            if (selectedNote && selectedNote.id) {
              const completedKey = `taskOrder-completed-${selectedNote.id}`;
              localStorage.removeItem(completedKey);
            }

            // Veriyi kaydet ve arayüzü güncelle
            saveData(false);
            highlightTabsWithContent();
            document.querySelector('.task-list').innerHTML = "";
            deleteAllCompletedButton.style.display = 'none';
          }
        });

        function switchTab(tabType) {
          renderTasks(tabType, taskDiv);
          document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active-tab'));
          const tabMap = {
            'active': activeTab,
            'today': todayTab,
            'overdue': overdueTab,
            'completed': completedTab
          };
          tabMap[tabType].classList.add('active-tab');

          deleteAllCompletedButton.style.display = tabType === 'completed' ? 'inline-block' : 'none';

          if (tabType === 'completed') {
            const hasCompletedTasks = selectedNote.task_content.some(task => {
              return task.task_completed === 1 || (task.subTasks && task.subTasks.some(subTask => subTask.task_completed === 1));
            });
            deleteAllCompletedButton.style.display = hasCompletedTasks ? 'inline-block' : 'none';
            if (!hasCompletedTasks) {
              document.querySelector('.task-list').innerHTML = '';
            }
          }
          subtasksShow();
        }

        renderTasks('active', taskDiv);
        subtasksShow();
      } else {
        if (document.querySelector('.task_div')) {
          document.querySelector('.task_div').remove();
          noteContentIc.classList.remove('note-task');
        }
      }
      document.querySelectorAll('#note-editor a').forEach(link => {
        if (link.innerHTML.match(/ /)) {
          link.addEventListener('click', function (e) {
            e.preventDefault();
            window.open(this.href, '_blank');
          });
        }
      });

      const checkboxes = editor.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        const label = checkbox.nextSibling;
        checkbox.addEventListener('change', function () {
          if (this.checked) {
            label.style.opacity = '0.5';
            this.setAttribute('checked', 'checked');
          } else {
            label.style.opacity = '1';
            this.removeAttribute('checked');
          }
        });
      });
    } else {
      noteEditor.innerHTML = '';
      noteTitleInput.value = '';
      document.getElementById('note-created-date').textContent = '';
    }
  }
  function subtasksShow() {
    document.querySelectorAll('.togglediv').forEach(toggleDiv => {
      toggleDiv.addEventListener('click', function () {
        this.classList.toggle('active');
        const taskContainer = this.closest('.task_list_container');
        const subtasksContainer = taskContainer.querySelector('.subtasks_list_container');
        subtasksContainer.classList.toggle('show');
        if (subtasksContainer.classList.contains('show')) {
          subtasksContainer.style.display = 'block';
        } else {
          subtasksContainer.style.display = 'none';
        }
      });
    });
    const taskList = document.getElementsByClassName('task-list')[0];
    if (document.querySelector('.thiza_button')) {
      document.querySelector('.thiza_button').remove();
    }
    document.querySelector('.task_div').insertAdjacentHTML('afterbegin', `<button class="thiza_button"></button>`);
    const thiza = document.querySelector('.thiza_button');
    taskList.classList.toggle('thiza', localStorage.getItem('thizaState') === 'two');
    thiza.addEventListener('click', function () {
      localStorage.setItem('thizaState', taskList.classList.toggle('thiza') ? 'two' : 'one');
      updateGist();
    });
  }
  function toggleTaskCompletion(task) {
    if (task.isSubTask) {
      const parentTask = selectedNote.task_content[task.originalTaskIndex];
      const subTask = parentTask.subTasks[task.originalSubTaskIndex];
      subTask.task_completed = subTask.task_completed === 1 ? 0 : 1;
      saveData(false);
    } else {
      const originalTask = selectedNote.task_content[task.originalTaskIndex];
      if (originalTask.task_completed === 0) {
        originalTask.task_completed = 1;
        originalTask.subTasks.forEach(subTask => {
          subTask.task_completed = 1;
        });
      } else {
        originalTask.task_completed = 0;
        originalTask.subTasks.forEach(subTask => {
          subTask.task_completed = 0;
        });
      }
      saveData(false);
    }
  }
  function dateDesign(dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    const dateWrapper = document.createElement('div');
    dateWrapper.style.position = 'relative';
    const dateLabel = document.createElement('span');
    dateLabel.classList.add('date_span');
    dateLabel.textContent = translate("today");
    dateInput.addEventListener('change', (e) => {
      const selectedDate = new Date(e.target.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      dateLabel.textContent = selectedDate.getTime() === today.getTime() ? translate("today") : e.target.value;
    });
    dateWrapper.appendChild(dateInput);
    dateWrapper.appendChild(dateLabel);
    return dateWrapper;
  }
  function setupTaskUI() {
    if (document.querySelector('.task_div')) document.querySelector('.task_div').remove();
    const noteContentIc = document.querySelector('.note-content-ic');
    noteContentIc.classList.add('note-task');
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task_div');
    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('gorev_ekle');
    taskDiv.appendChild(addTaskButton);
    addTaskButton.addEventListener('click', openTaskModal);
    noteContentIc.appendChild(taskDiv);
    taskDiv.insertAdjacentHTML('afterbegin', `<div id="arrow" class="geriTask">${translate("back")}</div>`);
    const geriTask = document.getElementsByClassName('geriTask')[0];
    geriTask.addEventListener('click', () => {
      noteBar.style.visibility = 'visible';
      noteBar.style.display = 'grid';
      noteBar.style.width = '100%';
      noteContentIc.style.display = 'none';
      noteContent.style.display = 'none';
    });
  }
  function openTaskModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div id="taskModalContent"></div>
            <button class="alt_gorev_ekle">${translate("add_subtask")}</button>
            <div class="colors">
                <div class="color-option" style="background-color: #b1653d;" data-color="b1653d"></div>
                <div class="color-option" style="background-color: #9a900b;" data-color="9a900b"></div>
                <div class="color-option" style="background-color: #6c8f20;" data-color="6c8f20"></div>
                <div class="color-option" style="background-color: #1490b5;" data-color="1490b5"></div>
                <div class="color-option" style="background-color: #1b86f2;" data-color="1b86f2"></div>
                <div class="color-option" style="background-color: #527cf8;" data-color="527cf8"></div>
                <div class="color-option" style="background-color: #8772ff;" data-color="8772ff"></div>
                <div class="color-option" style="background-color: #b34e99;" data-color="b34e99"></div>
                <div class="color-option" style="background-color: #bb4141;" data-color="bb4141"></div>
            </div>
            <button id="saveTasksButton" class="delete-confirm">${translate("save")}</button>
            <button id="cancelTasksButton" class="delete-cancel">${translate("cancel")}</button>
        </div>`;
    document.body.appendChild(modal);
    const saveTasksButton = document.getElementById('saveTasksButton');
    const cancelTasksButton = document.getElementById('cancelTasksButton');
    const taskModalContent = document.getElementById('taskModalContent');
    const colorOptions = modal.querySelectorAll('.color-option');
    let selectedColor = 'b1653d';
    colorOptions.forEach(option => {
      option.addEventListener('click', () => {
        document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedColor = option.getAttribute('data-color');
      });
    });
    colorOptions[0].classList.add('selected');
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task_container');
    const taskInput = document.createElement('textarea');
    taskInput.placeholder = translate("what_to_do");
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    const dateWrapper = dateDesign(dateInput);
    const subTasksContainer = document.createElement('div');
    subTasksContainer.classList.add('subtasks_container');
    taskContainer.appendChild(taskInput);
    taskContainer.appendChild(dateWrapper);
    taskContainer.appendChild(subTasksContainer);
    taskModalContent.appendChild(taskContainer);
    taskInput.focus();
    const subTaskButton = document.querySelector('.alt_gorev_ekle');
    subTaskButton.addEventListener('click', () => {
      const subTaskWrapper = createNewSubTaskWrapper();
      subTasksContainer.appendChild(subTaskWrapper);
      subTaskWrapper.querySelector('textarea').focus();
    });
    saveTasksButton.addEventListener('click', () => {
      const taskName = taskInput.value.trim();
      if (!taskName) {
        alert(translate("task_name_cannot_be_empty"));
        return;
      }
      const subTasks = [];
      subTasksContainer.querySelectorAll('.subtask_wrapper').forEach(subTaskWrapper => {
        const subTaskName = subTaskWrapper.querySelector('textarea').value;
        const subTaskDate = subTaskWrapper.querySelector('input[type="date"]').value;
        const subTaskId = Date.now() + Math.floor(Math.random() * 1000);
        subTasks.push({ name: subTaskName, date: subTaskDate, id: subTaskId, task_completed: 0 });
      });
      const newTask = {
        name: taskName,
        date: dateInput.value,
        color: selectedColor,
        task_completed: 0,
        id: Date.now(),
        subTasks
      };
      if (selectedNote && selectedNote.task_content !== null) {
        selectedNote.task_content.unshift(newTask);
        saveData(false);
        renderNotes();
        loadNoteContent();
      }
      document.body.removeChild(modal);
    });
    cancelTasksButton.addEventListener('click', () => document.body.removeChild(modal));
  }
  function createDateWrapper(dateInput, initialDate) {
    const dateWrapper = document.createElement('div');
    dateWrapper.style.position = 'relative';
    const dateLabel = document.createElement('span');
    dateLabel.classList.add('date_span');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const initialDateTime = new Date(initialDate);
    initialDateTime.setHours(0, 0, 0, 0);
    dateLabel.textContent = initialDateTime.getTime() === today.getTime() ? translate("today") : initialDate;
    dateInput.addEventListener('change', (e) => {
      const selectedDate = new Date(e.target.value);
      selectedDate.setHours(0, 0, 0, 0);
      dateLabel.textContent = selectedDate.getTime() === today.getTime() ? translate("today") : e.target.value;
    });
    dateWrapper.appendChild(dateInput);
    dateWrapper.appendChild(dateLabel);
    return dateWrapper;
  }
  function createSubTaskWrapper(subTask) {
    const subTaskWrapper = document.createElement('div');
    subTaskWrapper.classList.add('subtask_wrapper');
    const subTaskInput = document.createElement('textarea');
    subTaskInput.placeholder = translate("what_to_do");
    subTaskInput.value = subTask.name;
    const subTaskDate = document.createElement('input');
    subTaskDate.type = 'date';
    subTaskDate.value = subTask.date;
    const dateWrapper = createDateWrapper(subTaskDate, subTask.date);
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-subtask-button-modal');
    deleteButton.addEventListener('click', () => subTaskWrapper.remove());
    subTaskWrapper.appendChild(deleteButton);
    subTaskWrapper.appendChild(subTaskInput);
    subTaskWrapper.appendChild(dateWrapper);
    return subTaskWrapper;
  }
  function createNewSubTaskWrapper() {
    const subTaskWrapper = document.createElement('div');
    subTaskWrapper.classList.add('subtask_wrapper');
    const subTaskInput = document.createElement('textarea');
    subTaskInput.placeholder = translate("what_to_do");
    const subTaskDate = document.createElement('input');
    subTaskDate.type = 'date';
    const dateWrapper = dateDesign(subTaskDate);
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-subtask-button-modal');
    deleteButton.addEventListener('click', () => subTaskWrapper.remove());
    subTaskWrapper.appendChild(deleteButton);
    subTaskWrapper.appendChild(subTaskInput);
    subTaskWrapper.appendChild(dateWrapper);
    return subTaskWrapper;
  }
  function openTaskModalForEdit(task) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div id="taskModalContent"></div>
            <button class="alt_gorev_ekle">${translate("add_subtask")}</button>
            <div class="colors">
                <div class="color-option" style="background-color: #b1653d;" data-color="b1653d"></div>
                <div class="color-option" style="background-color: #9a900b;" data-color="9a900b"></div>
                <div class="color-option" style="background-color: #6c8f20;" data-color="6c8f20"></div>
                <div class="color-option" style="background-color: #1490b5;" data-color="1490b5"></div>
                <div class="color-option" style="background-color: #1b86f2;" data-color="1b86f2"></div>
                <div class="color-option" style="background-color: #527cf8;" data-color="527cf8"></div>
                <div class="color-option" style="background-color: #8772ff;" data-color="8772ff"></div>
                <div class="color-option" style="background-color: #b34e99;" data-color="b34e99"></div>
                <div class="color-option" style="background-color: #bb4141;" data-color="bb4141"></div>
            </div>
            <button id="saveTasksButton" class="delete-confirm">${translate("save")}</button>
            <button id="cancelTasksButton" class="delete-cancel">${translate("cancel")}</button>
        </div>`;
    document.body.appendChild(modal);

    const saveTasksButton = document.getElementById('saveTasksButton');
    const cancelTasksButton = document.getElementById('cancelTasksButton');
    const taskModalContent = document.getElementById('taskModalContent');
    const colorOptions = modal.querySelectorAll('.color-option');

    // Renk seçimi yönetimi
    let selectedColor = task.color || 'b1653d';
    colorOptions.forEach(option => {
      if (option.getAttribute('data-color') === selectedColor) {
        option.classList.add('selected');
      }
      option.addEventListener('click', () => {
        colorOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedColor = option.getAttribute('data-color');
      });
    });

    // Task container oluşturma
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task_container');

    // Task input alanı
    const taskInput = document.createElement('textarea');
    taskInput.placeholder = translate("what_to_do");
    taskInput.value = task.name;

    // Tarih input alanı
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.value = task.date;
    const dateWrapper = createDateWrapper(dateInput, task.date);

    // Alt görevler container
    const subTasksContainer = document.createElement('div');
    subTasksContainer.classList.add('subtasks_container');

    // Mevcut alt görevleri ekle
    if (task.subTasks && Array.isArray(task.subTasks)) {
      task.subTasks.forEach(subTask => {
        const subTaskWrapper = createSubTaskWrapper(subTask);
        subTasksContainer.appendChild(subTaskWrapper);
      });
    }

    // Container'a elementleri ekle
    taskContainer.appendChild(taskInput);
    taskContainer.appendChild(dateWrapper);
    taskContainer.appendChild(subTasksContainer);
    taskModalContent.appendChild(taskContainer);

    // Alt görev ekleme butonu
    const subTaskButton = modal.querySelector('.alt_gorev_ekle');
    subTaskButton.addEventListener('click', () => {
      const subTaskWrapper = createNewSubTaskWrapper();
      subTasksContainer.appendChild(subTaskWrapper);
      subTaskWrapper.querySelector('textarea').focus();
    });

    saveTasksButton.addEventListener('click', () => {
      const updatedTaskName = taskInput.value.trim();
      if (!updatedTaskName) {
        alert(translate("task_name_cannot_be_empty"));
        return;
      }
      const taskIndex = selectedNote.task_content.findIndex(t =>
        t.name === task.name &&
        t.date === task.date &&
        t.color === task.color
      );

      if (taskIndex === -1) {
        return;
      }

      // Alt görevleri topla
      const updatedSubTasks = Array.from(subTasksContainer.querySelectorAll('.subtask_wrapper')).map((wrapper, index) => {
        const subTaskInput = wrapper.querySelector('textarea');
        const subTaskDate = wrapper.querySelector('input[type="date"]');
        let subTaskId;
        if (task.subTasks && task.subTasks[index] && task.subTasks[index].id) {
          subTaskId = task.subTasks[index].id;
        } else {
          subTaskId = Date.now() + Math.floor(Math.random() * 1000);
        }
        return {
          name: subTaskInput.value.trim(),
          date: subTaskDate.value,
          id: subTaskId,
          task_completed: 0
        };
      });
      selectedNote.task_content[taskIndex] = {
        ...selectedNote.task_content[taskIndex],
        name: updatedTaskName,
        date: dateInput.value,
        color: selectedColor,
        subTasks: updatedSubTasks
      };

      saveData(false);
      renderNotes();
      loadNoteContent();
      document.body.removeChild(modal);
    });

    cancelTasksButton.addEventListener('click', () => document.body.removeChild(modal));
  }
  function openSubTaskModalForEdit(parentTask, subTask) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div id="subTaskModalContent"></div>
            <button id="saveSubTaskButton" class="delete-confirm">${translate("save")}</button>
            <button id="cancelSubTaskButton" class="delete-cancel">${translate("cancel")}</button>
        </div>`;
    document.body.appendChild(modal);

    const modalContent = document.getElementById('subTaskModalContent');
    const subTaskInput = document.createElement('textarea');
    subTaskInput.placeholder = translate("what_to_do");

    let taskToEdit, subTaskToEdit;

    if (subTask.originalTaskIndex !== undefined) {
      // Bağımsız alt görev düzenleme
      taskToEdit = selectedNote.task_content[subTask.originalTaskIndex];
      if (!taskToEdit || !taskToEdit.subTasks || subTask.originalSubTaskIndex >= taskToEdit.subTasks.length) {
        document.body.removeChild(modal);
        return;
      }
      subTaskToEdit = taskToEdit.subTasks[subTask.originalSubTaskIndex];
      subTaskInput.value = subTaskToEdit.name;
    } else {
      // Normal alt görev düzenleme
      taskToEdit = parentTask;
      const subTaskIndex = taskToEdit.subTasks.findIndex(st =>
        st.name === subTask.name && st.date === subTask.date && st.id === subTask.id && st.task_completed === subTask.task_completed
      );
      if (subTaskIndex === -1) {
        document.body.removeChild(modal);
        return;
      }
      subTaskToEdit = taskToEdit.subTasks[subTaskIndex];
      subTaskInput.value = subTaskToEdit.name;
    }

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.value = subTaskToEdit.date;
    const dateWrapper = createDateWrapper(dateInput, dateInput.value);

    modalContent.appendChild(subTaskInput);
    modalContent.appendChild(dateWrapper);

    document.getElementById('saveSubTaskButton').addEventListener('click', () => {
      const newName = subTaskInput.value.trim();
      if (!newName) {
        alert(translate("task_name_cannot_be_empty"));
        return;
      }
      subTaskToEdit.name = newName;
      subTaskToEdit.date = dateInput.value;
      saveData(false);
      renderNotes();
      loadNoteContent();
      document.body.removeChild(modal);
    });

    document.getElementById('cancelSubTaskButton').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  }
  function deleteTask(task) {
    if (task.isSubTask) {
      const parentTask = selectedNote.task_content[task.originalTaskIndex];
      if (parentTask && parentTask.subTasks) {
        parentTask.subTasks = parentTask.subTasks.filter((_, index) => index !== task.originalSubTaskIndex);
        if (parentTask.subTasks.length === 0 && parentTask.task_completed === 1) {
          selectedNote.task_content = selectedNote.task_content.filter((_, index) => index !== task.originalTaskIndex);
        }
      }
    } else {
      const taskIndex = task.originalTaskIndex;
      if (taskIndex !== undefined && taskIndex >= 0) {
        selectedNote.task_content.splice(taskIndex, 1);
      }
    }
    if (selectedNote && task.id) {
      const tabTypes = ['active', 'today', 'overdue', 'completed'];
      tabTypes.forEach(tabType => {
        const key = `taskOrder-${tabType}-${selectedNote.id}`;
        const savedTaskOrder = localStorage.getItem(key);
        if (savedTaskOrder) {
          let taskOrder = JSON.parse(savedTaskOrder);
          if (Array.isArray(taskOrder)) {
            taskOrder = taskOrder.filter(id => id.toString() !== task.id.toString());
            if (taskOrder.length > 1) {
              localStorage.setItem(key, JSON.stringify(taskOrder));
            } else {
              localStorage.removeItem(key);
            }
          }
        }
      });
    }

    saveData(false);
    highlightTabsWithContent();
  }
  function deleteSubTask(task, subTask) {
    const taskIndex = task.originalTaskIndex;
    if (taskIndex !== undefined && taskIndex >= 0 && taskIndex < selectedNote.task_content.length) {
      const parentTask = selectedNote.task_content[taskIndex];
      const subTaskIndex = parentTask.subTasks.findIndex(st =>
        st.name === subTask.name && st.date === subTask.date && st.task_completed === subTask.task_completed
      );
      if (subTaskIndex !== -1) {
        parentTask.subTasks.splice(subTaskIndex, 1);
        if (parentTask.subTasks.length === 0 && parentTask.task_completed === 1) {
          selectedNote.task_content.splice(taskIndex, 1);
        }

        // Tüm tabType'lar için taskOrder güncellemesi
        if (selectedNote && subTask.id) {
          const tabTypes = ['active', 'today', 'overdue', 'completed'];
          tabTypes.forEach(tabType => {
            const key = `taskOrder-${tabType}-${selectedNote.id}`;
            const savedTaskOrder = localStorage.getItem(key);
            if (savedTaskOrder) {
              let taskOrder = JSON.parse(savedTaskOrder);
              if (Array.isArray(taskOrder)) {
                taskOrder = taskOrder.filter(id => id.toString() !== subTask.id.toString());
                if (taskOrder.length > 1) {
                  localStorage.setItem(key, JSON.stringify(taskOrder));
                } else {
                  localStorage.removeItem(key); // Liste boş veya tek elemanlıysa anahtarı sil
                }
              }
            }
          });
        }

        saveData(false);
        highlightTabsWithContent();
      }
    }
  }
  function addNote(isTask = false) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const labelContent = isTask ? translate("task_title") : translate("note_title");
    const alertContent = isTask ? translate("task_title_cannot_be_empty") : translate("note_title_empty");
    modal.innerHTML = `
        <div class="modal-content">
            <label for="newNoteTitle">${labelContent}</label>
            <input type="text" id="newNoteTitle">
            <div class="colors"> 
                <div class="color-option" style="background-color: #b1653d;" data-color="b1653d"></div>
                <div class="color-option" style="background-color: #9a900b;" data-color="9a900b"></div>
                <div class="color-option" style="background-color: #6c8f20;" data-color="6c8f20"></div>
                <div class="color-option" style="background-color: #1490b5;" data-color="1490b5"></div>
                <div class="color-option" style="background-color: #1b86f2;" data-color="1b86f2"></div>
                <div class="color-option" style="background-color: #527cf8;" data-color="527cf8"></div>
                <div class="color-option" style="background-color: #8772ff;" data-color="8772ff"></div>
                <div class="color-option" style="background-color: #b34e99;" data-color="b34e99"></div>
                <div class="color-option" style="background-color: #bb4141;" data-color="bb4141"></div>
            </div>
            <button id="confirmDelete">${translate("add")}</button>
            <button id="cancelDelete">${translate("cancel")}</button>
        </div>`;
    document.body.appendChild(modal);
    const newNoteTitleInput = document.getElementById('newNoteTitle');
    const confirmDelete = document.getElementById('confirmDelete');
    const cancelDelete = document.getElementById('cancelDelete');
    const colorOptions = document.querySelectorAll('.color-option');
    let selectedColor = 'b1653d';
    colorOptions.forEach(option => {
      option.addEventListener('click', () => {
        document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedColor = option.getAttribute('data-color');
      });
    });
    colorOptions[0].classList.add('selected');
    newNoteTitleInput.focus();
    confirmDelete.addEventListener('click', () => {
      const title = newNoteTitleInput.value.trim();
      if (!title) {
        alert(alertContent);
        return;
      }
      if (!localStorage.getItem('categories') || localStorage.getItem('categories').trim() === '') {
        alert(translate("please_add_category_first"));
        return;
      }
      const newNote = {
        id: Date.now().toString(),
        title: title,
        color: selectedColor,
        task_content: isTask ? [] : null,
        content: isTask ? '' : null,
        categories: selectedCategory ? [selectedCategory.id] : [],
        createdAt: new Date().toISOString()
      };
      notes.unshift(newNote);
      selectedNote = newNote;
      saveData(false);
      renderNotes();
      loadNoteContent();
      noteContentIc.style.display = 'block';
      document.body.removeChild(modal);
      if (isTask) setupTaskUI();
    });
    cancelDelete.addEventListener('click', () => document.body.removeChild(modal));
    newNoteTitleInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') confirmDelete.click();
    });
  }
  function enableDragAndDrop(sortableClass, listId, updateOrderCallback, rowSelector = 'li') {
    const sortables = document.querySelectorAll(sortableClass);

    let draggingEle = null;     // Sürüklenen eleman
    let placeholder = null;     // Yer tutucu eleman
    let dragPreviewEl = null;   // Sürükleme önizleme elemanı
    let currentSortable = null; // Şu anki sıralanabilir alan
    let isDragging = false;     // Sürükleme aktif mi?
    let startX = 0;             // Başlangıç X koordinatı
    let startY = 0;             // Başlangıç Y koordinatı
    let offsetX = 0;            // X ekseninde kayma
    let offsetY = 0;            // Y ekseninde kayma
    let touchStartTime = 0;     // Dokunma başlangıç zamanı
    let touchMoved = false;     // Dokunma sırasında hareket oldu mu?
    let isTouchEvent = false;   // Dokunma olayı mı?
    let scrollableContainer = null; // Scroll edilebilir container
    let scrollSpeed = 15;       // Scroll hızı (piksel/frame)
    let scrollThreshold = 50;   // Scroll eşiği (piksel)
    let lastClientY = 0;        // Son Y koordinatı

    // Sıralanabilir elemanlara olay dinleyicileri ekle
    sortables.forEach(sortable => {
      const rows = sortable.querySelectorAll(rowSelector);
      rows.forEach(row => {
        row.addEventListener('mousedown', startDrag);
        row.addEventListener('touchstart', startDrag, { passive: false });
      });
    });

    function startDrag(e) {
      e.stopPropagation();
      // Arama aktifse sürüklemeyi engelle
      const lang = document.documentElement.lang;
      const searchTerm = lang === "tr" ? noteSearchInput.value.turkishToLower() : noteSearchInput.value.toLowerCase();
      const contentSearchTerm = lang === "tr" ? noteContentSearchInput.value.turkishToLower() : noteContentSearchInput.value.toLowerCase();
      const isSearchActive = searchTerm || contentSearchTerm;
      if (isSearchActive) {
        e.preventDefault();
        return;
      }

      // Tooltip'leri gizle
      document.querySelectorAll('.tooltip').forEach(tooltip => tooltip.removeAttribute('style'));

      draggingEle = this;
      currentSortable = draggingEle.closest(sortableClass);
      currentListId = listId;
      // Scroll edilebilir container’ı dinamik olarak bul
      scrollableContainer = currentSortable; // Varsayılan olarak currentSortable’ı kullan
      if (scrollableContainer.scrollHeight <= scrollableContainer.clientHeight) {
        // Eğer currentSortable scroll edilemezse, üstteki scroll edilebilir elementi bul
        let parent = currentSortable.parentElement;
        while (parent) {
          if (parent.scrollHeight > parent.clientHeight) {
            scrollableContainer = parent;
            break;
          }
          parent = parent.parentElement;
        }
      }

      // Olay tipini kontrol et
      isTouchEvent = e.type === 'touchstart';
      startX = isTouchEvent ? e.touches[0].clientX : e.clientX;
      startY = isTouchEvent ? e.touches[0].clientY : e.clientY;
      lastClientY = startY;







      if (isTouchEvent) {
        touchStartTime = new Date().getTime();
      }
      touchMoved = false;

      // Olay dinleyicilerini ekle
      document.addEventListener('mousemove', onMove);
      document.addEventListener('touchmove', onMove, { passive: false });
      document.addEventListener('mouseup', onEnd);
      document.addEventListener('touchend', onEnd);
    }

    function onMove(e) {
      const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

      const deltaX = Math.abs(clientX - startX);
      const deltaY = Math.abs(clientY - startY);

      // Sürükleme başlangıcını kontrol et
      if (!isDragging && (deltaX > 5 || deltaY > 5)) {
        const currentTime = new Date().getTime();
        const timeElapsed = isTouchEvent ? currentTime - touchStartTime : 0;
        if (!isTouchEvent || (isTouchEvent && timeElapsed >= 700)) {
          const spanElement = draggingEle.querySelector('span');
          if (spanElement && spanElement.parentElement) {
            spanElement.parentElement.classList.add('dragging');
          }
          const rect = draggingEle.getBoundingClientRect();
          offsetX = startX - rect.left;
          offsetY = startY - rect.top;
          // Sürükleme önizleme elemanı oluştur
          dragPreviewEl = draggingEle.cloneNode(true);
          dragPreviewEl.id = "drag-preview";
          dragPreviewEl.style.position = "fixed";
          dragPreviewEl.style.left = `${rect.left}px`;
          dragPreviewEl.style.top = `${rect.top}px`;
          dragPreviewEl.style.width = `${rect.width}px`;
          dragPreviewEl.style.pointerEvents = "none";
          dragPreviewEl.style.zIndex = "1000";
          document.body.appendChild(dragPreviewEl);

          isDragging = true;
          touchMoved = true;
          draggingEle.style.visibility = 'hidden';
          draggingEle.style.height = '0';
          draggingEle.style.padding = '0';
        }
      }

      if (isDragging) {
        // Önizleme pozisyonunu güncelle
        dragPreviewEl.style.left = `${clientX - offsetX}px`;
        dragPreviewEl.style.top = `${clientY - offsetY}px`;

        // Scroll’u sürekli ayarla
        lastClientY = clientY;
        requestAnimationFrame(() => adjustScroll(clientY));

        // Hedef konumu bul ve yer tutucuyu güncelle
        const target = document.elementFromPoint(clientX, clientY);
        const targetRow = target?.closest(rowSelector);

        if (targetRow && targetRow !== draggingEle && targetRow.parentNode === currentSortable) {
          const rect = targetRow.getBoundingClientRect();
          const next = (clientY - rect.top) > (rect.height / 2);

          if (!placeholder) {
            placeholder = document.createElement('div');
            placeholder.classList.add('placeholder');
          }

          if (next) {
            currentSortable.insertBefore(placeholder, targetRow.nextSibling);
          } else {
            currentSortable.insertBefore(placeholder, targetRow);
          }
        }
      }
    }

    function adjustScroll(clientY) {
      if (!scrollableContainer || !isDragging) return;

      const containerRect = scrollableContainer.getBoundingClientRect();
      const topThreshold = containerRect.top + scrollThreshold;
      const bottomThreshold = containerRect.bottom - scrollThreshold;

      // Öğe yukarı sürükleniyorsa scroll aşağı gider (scrollTop azalır)
      if (clientY < topThreshold) {
        const distance = topThreshold - clientY;
        const speed = Math.min(scrollSpeed * (distance / scrollThreshold), scrollSpeed * 2);
        scrollableContainer.scrollTop -= speed;
      }
      // Öğe aşağı sürükleniyorsa scroll yukarı gider (scrollTop artar)
      else if (clientY > bottomThreshold) {
        const distance = clientY - bottomThreshold;
        const speed = Math.min(scrollSpeed * (distance / scrollThreshold), scrollSpeed * 2);
        scrollableContainer.scrollTop += speed;
      }
    }

    function onEnd(e) {
      if (!draggingEle || !currentSortable) return;
      document.querySelectorAll('.tooltip').forEach(tooltip => tooltip.removeAttribute('style'));

      if (isDragging) {
        draggingEle.removeAttribute('style');
        if (placeholder) {
          currentSortable.insertBefore(draggingEle, placeholder);
          placeholder.remove();
          placeholder = null;
        } else {
          currentSortable.appendChild(draggingEle);
        }
        if (currentListId === listId) {
          updateOrderCallback();
        }
      }
      const spanElement = draggingEle.querySelector('span');
      if (spanElement && spanElement.parentElement) {
        spanElement.parentElement.classList.remove('dragging');
      }
      if (dragPreviewEl) {
        dragPreviewEl.remove();
      }

      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('mouseup', onEnd);
      document.removeEventListener('touchend', onEnd);

      draggingEle = null;
      currentSortable = null;
      isDragging = false;
    }
  }
  function updateTaskOrder(tabType) {
    const taskListContainer = document.querySelector('.task-list');
    if (!taskListContainer) return;

    // Görevlerin ve bağımsız alt görevlerin sırasını güncelle
    const taskElements = taskListContainer.querySelectorAll('.task_list_container');
    const taskOrder = Array.from(taskElements).map(el => el.dataset.id);
    localStorage.setItem(`taskOrder-${tabType}-${selectedNote.id}`, JSON.stringify(taskOrder));

    // Her görev için alt görevlerin sırasını güncelle
    selectedNote.task_content.forEach(task => {
      if (task.subTasks && task.subTasks.length > 0) {
        const subTaskContainer = document.querySelector(`.task_list_container[data-id="${task.id}"] .subtasks_list_container`);
        if (subTaskContainer) {
          const subTaskElements = subTaskContainer.querySelectorAll('.subtask_list_wrapper');
          const subTaskOrder = Array.from(subTaskElements).map(el => el.dataset.id);

          // ID'si undefined veya null olan alt görevleri filtrele
          task.subTasks = task.subTasks.filter(subTask => subTask.id !== undefined && subTask.id !== null);

          // subTaskOrder'a göre alt görevleri sırala
          task.subTasks.sort((a, b) => {
            const indexA = subTaskOrder.indexOf(a.id.toString());
            const indexB = subTaskOrder.indexOf(b.id.toString());
            return indexA - indexB;
          });
        }
      }
    });

    // Veriyi kaydet
    saveData(false);
  }
  function updateCategoryOrder() {
    const categoryList = document.getElementById('category-list');
    if (categoryList) {
      const categoryOrder = Array.from(categoryList.children)
        .filter(li => li.dataset.id)
        .map(li => li.dataset.id);
      localStorage.setItem('categoryOrder', JSON.stringify(categoryOrder));
      updateGist();
    }
  }
  function updateNoteOrder() {
    const noteList = document.getElementById('note-list');
    if (noteList && selectedCategory) {
      const noteOrder = Array.from(noteList.children)
        .filter(li => li.dataset.id)
        .map(li => li.dataset.id);
      localStorage.setItem(`noteOrder-${selectedCategory.id}`, JSON.stringify(noteOrder));
      updateGist();
    }
  }
  function saveNote() {
    if (selectedNote) {
      const resizeHandle = noteEditor.querySelector('.resize-handle');
      if (resizeHandle) {
        resizeHandle.remove();
      }
      selectedNote.title = noteTitleInput.value.trim();
      const TitleName = noteTitleInput.value.trim();
      if (!TitleName || TitleName.trim() === '') {
        alert(translate("note_title_empty"));
        return;
      }
      selectedNote.content = noteEditor.innerHTML;
      saveData();
      renderNotes();
      loadNoteContent();
      noteContentIc.style.display = 'block';
    }
  }
  function editCategory(category) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modal-content">
      <input type="text" id="newCategoryName" value="${category.name}">
      <div class="colors">
        <div class="color-option" style="background-color: #b1653d;" data-color="b1653d"></div>
        <div class="color-option" style="background-color: #9a900b;" data-color="9a900b"></div>
        <div class="color-option" style="background-color: #6c8f20;" data-color="6c8f20"></div>
        <div class="color-option" style="background-color: #1490b5;" data-color="1490b5"></div>
        <div class="color-option" style="background-color: #1b86f2;" data-color="1b86f2"></div>
        <div class="color-option" style="background-color: #527cf8;" data-color="527cf8"></div>
        <div class="color-option" style="background-color: #8772ff;" data-color="8772ff"></div>
        <div class="color-option" style="background-color: #b34e99;" data-color="b34e99"></div>
        <div class="color-option" style="background-color: #bb4141;" data-color="bb4141"></div>
      </div>
      <button id="confirmDelete">${translate("add")}</button>
      <button id="cancelDelete">${translate("cancel")}</button>
    </div>
  `;
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<svg class="feather feather-trash" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`;
    deleteButton.classList.add('category-delete-button');
    document.body.appendChild(modal);
    document.getElementsByClassName('modal-content')[0].appendChild(deleteButton);
    deleteButton.addEventListener('click', (event) => {
      event.stopPropagation();
      deleteCategory(category);
    });
    const newCategoryName = document.getElementById('newCategoryName');
    const confirmDelete = document.getElementById('confirmDelete');
    const cancelDelete = document.getElementById('cancelDelete');
    const colorOptions = document.querySelectorAll('.color-option');
    let selectedColor = category.color;
    colorOptions.forEach(option => {
      if (option.getAttribute('data-color') === selectedColor) {
        option.classList.add('selected');
      }
      option.addEventListener('click', () => {
        document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedColor = option.getAttribute('data-color');
      });
    });
    function confirmDeleteName(category) {
      const newName = newCategoryName.value.trim();
      if (!newName || newName.trim() === '') {
        alert(translate("cat_name_empty"));
        return;
      }
      category.name = newName;
      category.color = selectedColor;
      saveData(false);
      renderCategories();
      document.body.removeChild(modal);
    }
    confirmDelete.addEventListener('click', () => {
      confirmDeleteName(category);
    });
    newCategoryName.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        confirmDeleteName(category);
      }
    });
    cancelDelete.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  }
  function editNote(note) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modal-content">
      <input type="text" id="newCategoryName" value="${note.title}">
      <div class="colors">
        <div class="color-option" style="background-color: #b1653d;" data-color="b1653d"></div>
        <div class="color-option" style="background-color: #9a900b;" data-color="9a900b"></div>
        <div class="color-option" style="background-color: #6c8f20;" data-color="6c8f20"></div>
        <div class="color-option" style="background-color: #1490b5;" data-color="1490b5"></div>
        <div class="color-option" style="background-color: #1b86f2;" data-color="1b86f2"></div>
        <div class="color-option" style="background-color: #527cf8;" data-color="527cf8"></div>
        <div class="color-option" style="background-color: #8772ff;" data-color="8772ff"></div>
        <div class="color-option" style="background-color: #b34e99;" data-color="b34e99"></div>
        <div class="color-option" style="background-color: #bb4141;" data-color="bb4141"></div>
      </div>
      <button id="confirmDelete">${translate("add")}</button>
      <button id="cancelDelete">${translate("cancel")}</button>
    </div>
  `;
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<svg class="feather feather-trash" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`;
    deleteButton.classList.add('category-delete-button');
    document.body.appendChild(modal);
    document.getElementsByClassName('modal-content')[0].appendChild(deleteButton);
    deleteButton.addEventListener('click', (event) => {
      event.stopPropagation();
      deleteNote(note);
    });
    const newCategoryName = document.getElementById('newCategoryName');
    const confirmDelete = document.getElementById('confirmDelete');
    const cancelDelete = document.getElementById('cancelDelete');
    const colorOptions = document.querySelectorAll('.color-option');
    let selectedColor = note.color;

    colorOptions.forEach(option => {
      if (option.getAttribute('data-color') === selectedColor) {
        option.classList.add('selected');
      }
      option.addEventListener('click', () => {
        document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedColor = option.getAttribute('data-color');
      });
    });
    function confirmDeleteName(note) {
      const newName = newCategoryName.value.trim();
      if (!newName || newName.trim() === '') {
        alert(translate("note_title_empty"));
        return;
      }
      note.title = newName;
      note.color = selectedColor;
      saveData(false);
      renderNotes();
      loadNoteContent();
      document.body.removeChild(modal);
    }
    confirmDelete.addEventListener('click', () => {
      confirmDeleteName(note);
    });
    newCategoryName.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        confirmDeleteName(note);
      }
    });
    cancelDelete.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  }
  function deleteNoteInContent() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modal-content">
      <p>${translate("are_you_sure_delete_note")}</p>
      <button id="confirmDelete">${translate("delete")}</button>
      <button id="cancelDelete">${translate("cancel")}</button>
    </div>
  `;
    document.body.appendChild(modal);
    const confirmDelete = document.getElementById('confirmDelete');
    const cancelDelete = document.getElementById('cancelDelete');
    const handleKeydown = (event) => {
      if (event.key === 'Enter') { handleDelete(); }
    };
    const removeModal = () => {
      if (modal && modal.parentNode) {
        modal.parentNode.removeChild(modal);
        document.removeEventListener('keydown', handleKeydown);
      }
    };
    const handleDelete = () => {
      if (selectedNote) {
        notes = notes.filter(note => note.id !== selectedNote.id);
        const savedNoteOrder = localStorage.getItem('noteOrder');
        if (savedNoteOrder) {
          let noteOrder = JSON.parse(savedNoteOrder);
          noteOrder = noteOrder.filter(id => id !== selectedNote.id.toString());
          localStorage.setItem('noteOrder', JSON.stringify(noteOrder));
        }
        if (selectedCategory) {
          const savedCategoryNoteOrder = localStorage.getItem(`noteOrder-${selectedCategory.id}`);
          if (savedCategoryNoteOrder) {
            let categoryNoteOrder = JSON.parse(savedCategoryNoteOrder);
            categoryNoteOrder = categoryNoteOrder.filter(id => id !== selectedNote.id.toString());
            localStorage.setItem(`noteOrder-${selectedCategory.id}`, JSON.stringify(categoryNoteOrder));
          }
        }
        selectedNote = null;
        const windowWidth = window.innerWidth;
        if (windowWidth < 1000) {
          sidebar.style.display = 'grid';
          sidebar.style.width = '100%';
          noteContent.style.display = 'none';
        } else {
          noteContentIc.style.display = 'none';
        }
        saveData(false);
        renderNotes();
      }
      removeModal();
    };
    const handleCancel = () => {
      removeModal();
    };
    confirmDelete.addEventListener('click', handleDelete);
    cancelDelete.addEventListener('click', handleCancel);
    document.addEventListener('keydown', handleKeydown);
  }
  function deleteNote(note) {
    if (!note || !note.id) {
      return;
    }

    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalId = `delete-modal-${note.id}`;
    modal.id = modalId;
    modal.innerHTML = `
    <div class="modal-content">
      <p>${translate("are_you_sure_delete_note")}</p>
      <button id="confirmDelete-${note.id}" class="delete-confirm">${translate("delete")}</button>
      <button id="cancelDelete-${note.id}" class="delete-cancel">${translate("cancel")}</button>
    </div>
  `;
    document.body.appendChild(modal);

    const confirmDelete = document.getElementById(`confirmDelete-${note.id}`);
    const cancelDelete = document.getElementById(`cancelDelete-${note.id}`);

    const removeAllModal = () => {
      const allModals = document.querySelectorAll('.modal');
      allModals.forEach(modalElement => {
        if (modalElement && modalElement.parentNode) {
          modalElement.parentNode.removeChild(modalElement);
        }
      });
      document.removeEventListener('keydown', handleKeydown);
    };

    const removeModalChild = () => {
      if (modal && modal.parentNode) {
        modal.parentNode.removeChild(modal);
        document.removeEventListener('keydown', handleKeydown);
      }
    };

    const handleDelete = () => {
      // Notu sil
      notes = notes.filter(n => n.id !== note.id);

      // Not sıralamasını güncelle
      const savedNoteOrder = localStorage.getItem('noteOrder');
      if (savedNoteOrder) {
        let noteOrder = JSON.parse(savedNoteOrder);
        noteOrder = noteOrder.filter(id => id !== note.id);
        localStorage.setItem('noteOrder', JSON.stringify(noteOrder));
      }

      // Kategoriye özel not sıralamasını güncelle
      if (selectedCategory) {
        const savedCategoryNoteOrder = localStorage.getItem(`noteOrder-${selectedCategory.id}`);
        if (savedCategoryNoteOrder) {
          let categoryNoteOrder = JSON.parse(savedCategoryNoteOrder);
          categoryNoteOrder = categoryNoteOrder.filter(id => id !== note.id);
          localStorage.setItem(`noteOrder-${selectedCategory.id}`, JSON.stringify(categoryNoteOrder));
        }
      }

      // Silinen nota ait taskOrder- ile başlayan tüm localStorage verilerini temizle
      const noteId = String(note.id); // note.id'yi string'e çevir
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('taskOrder-') && key.endsWith(`-${noteId}`)) {
          localStorage.removeItem(key);
        }
      }

      // Eğer silinen not seçili not ise, seçimi temizle
      if (selectedNote && selectedNote.id === note.id) {
        selectedNote = null;
        noteContentIc.style.display = 'none';
      }

      // Verileri kaydet ve notları yeniden render et
      saveData(false);
      renderNotes();

      // Modalı kaldır
      removeAllModal();
    };

    const handleCancel = () => {
      removeModalChild();
    };

    const handleKeydown = (event) => {
      if (event.key === 'Enter') {
        handleDelete();
      }
    };

    confirmDelete.addEventListener('click', handleDelete);
    cancelDelete.addEventListener('click', handleCancel);
    document.addEventListener('keydown', handleKeydown);

    const cleanup = () => {
      document.removeEventListener('keydown', handleKeydown);
    };

    modal.addEventListener('remove', cleanup);
  }
  function deleteCategory(category) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modal-content">
      <p>${translate("warning_category_and_notes_will_be_deleted")}</p>
      <button id="confirmDelete" class="confirmDelete-${category.id}">${translate("delete")}</button>
      <button id="cancelDelete" class="cancelDelete-${category.id}">${translate("cancel")}</button>
    </div>
  `;
    document.body.appendChild(modal);
    const confirmDelete = modal.querySelector(`.confirmDelete-${category.id}`);
    const cancelDelete = modal.querySelector(`.cancelDelete-${category.id}`);
    const handleKeydown = (event) => {
      if (event.key === 'Enter') {
        handleDelete();
      }
    };
    const removeAllModal = () => {
      const allModals = document.querySelectorAll('.modal');
      allModals.forEach(modalElement => {
        if (modalElement && modalElement.parentNode) {
          modalElement.parentNode.removeChild(modalElement);
        }
      });
      document.removeEventListener('keydown', handleKeydown);
    };
    const removeModalChild = () => {
      if (modal && modal.parentNode) {
        modal.parentNode.removeChild(modal);
        document.removeEventListener('keydown', handleKeydown);
      }
    };
    const handleDelete = () => {
      const notesInCategory = notes.filter(note => note.categories.includes(category.id));
      const noteIdsToRemove = notesInCategory.map(note => note.id);
      notes = notes.filter(note => !note.categories.includes(category.id));
      categories = categories.filter(cat => cat.id !== category.id);
      if (selectedCategory && selectedCategory.id === category.id) {
        selectedCategory = categories.length > 0 ? categories[0] : null;
      }
      const savedCategoryOrder = localStorage.getItem('categoryOrder');
      if (savedCategoryOrder) {
        let categoryOrder = JSON.parse(savedCategoryOrder);
        categoryOrder = categoryOrder.filter(id => id !== category.id.toString());
        localStorage.setItem('categoryOrder', JSON.stringify(categoryOrder));
      }
      const savedNoteOrder = localStorage.getItem('noteOrder');
      if (savedNoteOrder) {
        let noteOrder = JSON.parse(savedNoteOrder);
        noteOrder = noteOrder.filter(id => !noteIdsToRemove.includes(Number(id)));
        localStorage.setItem('noteOrder', JSON.stringify(noteOrder));
      }
      localStorage.removeItem(`noteOrder-${category.id}`);

      const noteId = String(noteIdsToRemove);
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('taskOrder-') && key.endsWith(`-${noteId}`)) {
          localStorage.removeItem(key);
        }
      }

      saveData(false);
      renderCategories();
      renderNotes();
      setTimeout(() => {
        noteContentIc.style.display = 'none';
      }, 100);
      removeAllModal();
    };
    const handleCancel = () => {
      removeModalChild();
    };
    confirmDelete.addEventListener('click', handleDelete);
    cancelDelete.addEventListener('click', handleCancel);
    document.addEventListener('keydown', handleKeydown);
  }
  String.prototype.turkishToLower = function () {
    var string = this;
    var letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
    return string.replace(/([İIŞĞÜÇÖ])/g, function (letter) {
      return letters[letter];
    }).toLowerCase();
  };

  function stripHtmlTags(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
  }
  noteSearchInput.addEventListener('input', renderNotes);
  noteContentSearchInput.addEventListener('input', renderNotes);
  addCategoryButton.addEventListener('click', addCategory);
  addNoteButton.addEventListener('click', () => { addNote(false); });
  addTaskButton.addEventListener('click', () => { addNote(true); });
  saveNoteButton.addEventListener('click', saveNote);
  deleteNoteButton.addEventListener('click', deleteNoteInContent);
  loadData();
  // localStorage veri al-ver
  const getStorageData = () => {
    const data = {
      categories: JSON.parse(localStorage.getItem('categories')),
      categoryOrder: JSON.parse(localStorage.getItem('categoryOrder')),
      notes: JSON.parse(localStorage.getItem('notes')),
      sidebarState: localStorage.getItem('sidebarState'),
      thizaState: localStorage.getItem('thizaState'),
      tema: localStorage.getItem('tema'),
      gistFile: localStorage.getItem('gistFile'),
      gistId: localStorage.getItem('gistId'),
      gistToken: localStorage.getItem('gistToken'),
      sync: localStorage.getItem('sync'),
      hasSelectedLanguage: localStorage.getItem('hasSelectedLanguage'),
      selectedLanguage: localStorage.getItem('selectedLanguage')
    };
    [...Array(localStorage.length)].forEach((_, i) => {
      const key = localStorage.key(i);
      // Handle both noteOrder and taskOrder keys
      if (key?.startsWith('noteOrder-') || key?.startsWith('taskOrder-')) {
        data[key] = JSON.parse(localStorage.getItem(key));
      }
    });
    return data;
  };
  document.getElementById('export').addEventListener('click', () => {
    const d = new Date();
    const filename = `notemod-${d.getDate().toString().padStart(2, '0')}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d.getFullYear()}.txt`;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(getStorageData(), null, 2)], { type: 'application/json' }));
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  });
  document.getElementById('import').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';
    input.addEventListener('change', async e => {
      const data = JSON.parse(await e.target.files[0].text());
      [...Array(localStorage.length)].forEach((_, i) => {
        const key = localStorage.key(i);
        if (key?.startsWith('noteOrder-') || key?.startsWith('taskOrder-')) {
          localStorage.removeItem(key);
        }
      });
      Object.entries(data).forEach(([k, v]) => {
        if (k === 'sidebarState' || k === 'thizaState' || k === 'tema' ||
          k === 'gistFile' || k === 'gistId' || k === 'gistToken' ||
          k === 'hasSelectedLanguage' || k === 'selectedLanguage' || k === 'sync') {
          localStorage.setItem(k, v);
        } else {
          localStorage.setItem(k, JSON.stringify(v));
        }
      });
      alert(translate("data_imported_successfully"));
      try {
        await new Promise(resolve => {
          updateGist();
          setTimeout(resolve, 1000);
        });
      } catch (error) {
        console.error("Gist güncelleme hatası:", error);
      }
      setTimeout(() => { location.reload(); }, 700);

    });
    input.click();
  });
  //gist veri ekleme
  let gistUpdateTimeout;
  let isUpdating = false;
  const updateGist = () => {
    clearTimeout(gistUpdateTimeout);
    gistUpdateTimeout = setTimeout(async () => {
      if (isUpdating) return;
      isUpdating = true;
      try {
        const yeniIcerik = JSON.stringify(getStorageData(), null, 2);
        const gistId = localStorage.getItem('gistId');
        const gistToken = localStorage.getItem('gistToken');
        const gistFile = localStorage.getItem('gistFile');
        if (gistId) {
          await gistGuncelle(gistId, gistFile, yeniIcerik, gistToken);
        }
      } finally {
        isUpdating = false;
      }
    }, 500);
  };
  async function gistGuncelle(gistId, dosyaAdi, yeniIcerik, token) {
    try {
      const eskiSyncDegeri = localStorage.getItem('sync');
      let parsedIcerik;
      try {
        parsedIcerik = JSON.parse(yeniIcerik);
      } catch (e) {
        throw new Error('yeniIcerik JSON formatında değil');
      }
      parsedIcerik.sync = '1';
      const guncelIcerik = JSON.stringify(parsedIcerik, null, 2);
      const response = await fetch(`https://api.github.com/gists/${gistId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          files: {
            [dosyaAdi]: {
              content: guncelIcerik,
            },
          },
        }),
      });
      if (!response.ok) {
        throw new Error('Gist güncelleme hatası');
      }
      localStorage.setItem('sync', '1');
      document.querySelector('button#sync').classList.add('aktif');
      if (eskiSyncDegeri === '0') {
        alert(translate("sync_active"));
      }
      return true;
    } catch (error) {
      if (localStorage.getItem('sync') === '1') {
        document.querySelector('button#sync').classList.remove('aktif');
        alert(translate("sync_error_message"));
        localStorage.setItem('sync', '0');
      }
      console.log('Gist güncelleme hatası:', error.message);
      return false;
    }
  }
  async function gistKontrol(gistId, token, gistFile) {
    try {
      const response = await fetch(`https://api.github.com/gists/${gistId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Gist kontrol hatası: ${response.status}`);
      }
      const gistData = await response.json();
      if (!gistData.files || !gistData.files[gistFile]) {
        throw new Error(`Dosya bulunamadı: ${gistFile}`);
      }
      return true;
    } catch (error) {
      console.error("Gist kontrolünde hata mevcut", error);
      return false;
    }
  }
  const gistId = localStorage.getItem('gistId');
  const gistToken = localStorage.getItem('gistToken');
  const gistFile = localStorage.getItem('gistFile');
  //gist end
  const sync = document.getElementById('sync');
  sync.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <p>${translate("sync")}</p>
            <label for="gistId">Gist ID:</label>
            <input type="text" id="gistId">
            <label for="gistToken">Gist Token:</label>
            <input type="text" id="gistToken">
            <label for="gistFile">Gist Name:</label>
            <input type="text" id="gistFile">
        <p id="sync_kurulum">${translate("setup_details")}</p>
        <p class="baglanti">${translate("backup_data_before_connection")}</p>
            <button id="saveSync" class="delete-confirm">${translate("save")}</button>
            <button id="cancelDelete">${translate("cancel")}</button>
        <p id="uyariMesaji">${translate("please_fill_all_fields")}</p>
        <p id="gistHataMesaji">${translate("gist_info_error_or_server_unreachable")}</p>
        </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('sync_kurulum').addEventListener('click', () => {
      const modal_kurulum = document.createElement('div');
      modal_kurulum.classList.add('modal');
      modal_kurulum.innerHTML = `
<div class="modal-content">
<h1>${translate("installation_steps")}</h1>
<p>${translate("create_github_account")} <a href="https://github.com/signup" target="_blank">https://github.com/signup</a></p>
<p>${translate("open_app_creation_page")} <a href="https://github.com/settings/apps" target="_blank">https://github.com/settings/apps</a></p>
<p>${translate("select_personal_access_tokens")}</p>
<p>${translate("click_generate_new_token")}</p>
<p>${translate("name_your_token")}</p>
<p>${translate("set_expiration_no_expiration")}</p>
<p>${translate("repository_access_public_repos")}</p>
<p>${translate("set_permissions_for_gist")}</p>
<p>${translate("click_generate_token")}</p>
<p style="color: #d6adff;">${translate("enter_token_in_setup")}</p>
<h2>${translate("create_file_for_sync")}</h2>
<p>${translate("go_to_gist_page")} <a href="https://gist.github.com" target="_blank">gist.github.com</a></p>
<p>${translate("specify_filename")}</p>
<p style="color: #d6adff;">${translate("enter_gist_name_in_setup")}</p>
<p>${translate("write_something_below_filename")}</p>
<p>${translate("select_create_secret_gist")}</p>
<p>${translate("copy_embed_content")}</p>
<p><code>&lt;script src="https://gist.github.com/user/1bae985fef7d26eca0a0a8128fbb97e8.js"&gt;&lt;/script&gt;</code></p>
<p>${translate("copy_id_after_username")}</p>
<p>${translate("example_id")} 1bae985fef7d26eca0a0a8128fbb97e8</p>
<p style="color: #d6adff;">${translate("enter_gist_id_in_setup")}</p>
<button id="veriGetir" class="delete-confirm">${translate("understood")}</button>
</div>
`;
      document.body.appendChild(modal_kurulum);

      document.getElementById('veriGetir').addEventListener('click', () => {
        document.body.removeChild(modal_kurulum);
      });

    });
    if (gistId) document.getElementById('gistId').value = gistId;
    if (gistToken) document.getElementById('gistToken').value = gistToken;
    if (gistFile) document.getElementById('gistFile').value = gistFile;
    const cancelDelete = document.getElementById('cancelDelete');
    cancelDelete.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
    const saveSync = document.getElementById('saveSync');
    saveSync.addEventListener('click', async () => {
      const gistId = document.getElementById('gistId').value.trim();
      const gistToken = document.getElementById('gistToken').value.trim();
      const gistFile = document.getElementById('gistFile').value.trim();
      const uyariMesaji = document.getElementById('uyariMesaji');
      const gistHataMesaji = document.getElementById('gistHataMesaji');
      if (gistId === '' || gistToken === '' || gistFile === '') {
        uyariMesaji.style.display = 'block';
        gistHataMesaji.style.display = 'none';
        return;
      }
      uyariMesaji.style.display = 'none';
      const testResult = await gistKontrol(gistId, gistToken, gistFile);
      if (testResult) {
        localStorage.setItem('gistId', gistId);
        localStorage.setItem('gistToken', gistToken);
        localStorage.setItem('gistFile', gistFile);
        document.body.removeChild(modal);
        document.querySelector('button#sync').classList.add('aktif');
        localStorage.setItem('sync', '1');
        const modalveri = document.createElement('div');
        modalveri.classList.add('modal');
        modalveri.innerHTML = `
    <div class="modal-content">
        <p>${translate("sync_successful")}</p>
        <button id="veriGetir" class="delete-confirm">${translate("fetch_data")}</button>
        <button id="cancelDelete">${translate("initial_setup")}</button>
    </div>
`;
        document.body.appendChild(modalveri);
        document.getElementById('veriGetir').addEventListener('click', () => {
          window.location.reload(true);
        });
        document.getElementById('cancelDelete').addEventListener('click', () => {
          updateGist();
          document.body.removeChild(modalveri);
        });
      } else {
        gistHataMesaji.style.display = 'block';
      }
    });
  });
});
// Editör fonksiyonları
function formatDoc(cmd, value = null) {
  document.execCommand(cmd, false, value);
}
let lastCaretPosition = null;
document.getElementById('note-editor').addEventListener('click', () => {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    lastCaretPosition = selection.getRangeAt(0);
  }
});
// Yazı boyutunu küçült-büyüt
window.onload = function () {
  const buyutButton = document.getElementById("buyut");
  const kucultButton = document.getElementById("kucult");
  if (document.documentElement.lang === "ar" || document.documentElement.lang === "fa") {
    var fontSize = 28;
  } else {
    var fontSize = 17;
  }
  buyutButton.addEventListener("click", () => {
    fontSize++;
    updateFontSizes();
  });
  kucultButton.addEventListener("click", () => {
    fontSize--;
    updateFontSizes();
  });
  function updateFontSizes() {
    editor.style.fontSize = fontSize + "px";
    editor.querySelectorAll("h1").forEach(h1 => {
      h1.style.fontSize = (fontSize * 1.235295) + "px";
    });
    editor.querySelectorAll("h2").forEach(h2 => {
      h2.style.fontSize = (fontSize * 1.058826) + "px";
    });
    editor.querySelectorAll("th, td").forEach(cell => {
      cell.style.fontSize = fontSize + "px";
    });
  }
};
//sağ tık düzenlemeleri
const contextMenu = document.createElement('div');
contextMenu.id = 'sag-tik';
const menuItem = document.createElement('div');
menuItem.className = 'sag-tik-buton';
menuItem.textContent = translate("paste_as_text");
const pasteItem = document.createElement('div');
pasteItem.className = 'sag-tik-buton';
pasteItem.textContent = translate("paste");
const copyItem = document.createElement('div');
copyItem.className = 'sag-tik-buton';
copyItem.textContent = translate("copy");
copyItem.style.display = 'none';
const cutItem = document.createElement('div');
cutItem.className = 'sag-tik-buton';
cutItem.textContent = translate("cut");
cutItem.style.display = 'none';

function wResize() {
  const windowWidth = window.innerWidth;
  if (windowWidth > 1000) {
    contextMenu.append(menuItem, pasteItem, copyItem, cutItem);
    document.body.appendChild(contextMenu);
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', e => { mouseX = e.pageX; mouseY = e.pageY });
    const handleContextMenu = (e, t) => {
      if (!editor.contains(e.target)) { contextMenu.style.display = 'none'; return }
      e.preventDefault();
      const selection = window.getSelection();
      const hasSelection = selection.toString().trim() !== '';
      copyItem.style.display = hasSelection ? 'block' : 'none';
      cutItem.style.display = hasSelection ? 'block' : 'none';
      let [x, y] = ['paste' === t ? mouseX : e.pageX, 'paste' === t ? mouseY : e.pageY];
      const w = contextMenu.offsetWidth, h = contextMenu.offsetHeight;
      x = Math.max(0, Math.min(x, window.innerWidth - w));
      y = Math.max(0, Math.min(y, window.innerHeight - h));
      contextMenu.style.cssText = `display:block;left:${x}px;top:${y}px`;
    };
    window.addEventListener('contextmenu', e => handleContextMenu(e, 'contextmenu'));
    window.addEventListener('paste', e => handleContextMenu(e, 'paste'));
    document.addEventListener('click', () => contextMenu.style.display = 'none');
    menuItem.addEventListener('click', async e => {
      contextMenu.style.display = 'none';
      e.preventDefault();
      const text = await navigator.clipboard.readText();
      const lines = text.split('\n');
      const insert = (p, pos) => lines.forEach((l, i) => {
        const t = document.createTextNode(l);
        pos ? (pos.insertNode(t), pos.setStartAfter(t)) : p.appendChild(t);
        if (i < lines.length - 1) {
          const b = document.createElement('br');
          pos ? (pos.insertNode(b), pos.setStartAfter(b)) : p.appendChild(b);
        }
      });
      lastCaretPosition ? (lastCaretPosition.deleteContents(), insert(null, lastCaretPosition)) : insert(editor);
    });

    pasteItem.addEventListener('click', async e => {
      contextMenu.style.display = 'none';
      e.preventDefault();
      const items = await navigator.clipboard.read();
      for (const i of items) if (i.types.includes('text/html')) {
        const html = await (await i.getType('text/html')).text();
        const d = document.createElement('div');
        d.innerHTML = html;
        d.querySelectorAll('*').forEach(e => { e.removeAttribute('style'); e.removeAttribute('class') });
        if (lastCaretPosition) {
          const f = document.createDocumentFragment();
          while (d.firstChild) f.appendChild(d.firstChild);
          lastCaretPosition.deleteContents();
          lastCaretPosition.insertNode(f);
        } else editor.insertAdjacentHTML('beforeend', d.innerHTML);
        //not içinde her türlü link çalışsın
        document.querySelectorAll('#note-editor a').forEach(link => {
          if (link.innerHTML.match(/<.*>/)) {
            link.addEventListener('click', function (e) {
              e.preventDefault();
              window.open(this.href, '_blank');
            });
          }
        });
        return;
      }
      const text = await navigator.clipboard.readText();
      lastCaretPosition ? (lastCaretPosition.deleteContents(), lastCaretPosition.insertNode(document.createTextNode(text))) : editor.appendChild(document.createTextNode(text));
    });
    copyItem.addEventListener('click', e => {
      contextMenu.style.display = 'none';
      e.preventDefault();
      if (lastCaretPosition) {
        const tempDiv = document.createElement('div');
        tempDiv.appendChild(lastCaretPosition.cloneContents());
        navigator.clipboard.write([
          new ClipboardItem({
            'text/html': new Blob([tempDiv.innerHTML], { type: 'text/html' }),
            'text/plain': new Blob([tempDiv.textContent], { type: 'text/plain' })
          })
        ]);
      }
    });
    cutItem.addEventListener('click', e => {
      contextMenu.style.display = 'none';
      e.preventDefault();
      if (lastCaretPosition) {
        const tempDiv = document.createElement('div');
        tempDiv.appendChild(lastCaretPosition.cloneContents());
        navigator.clipboard.write([
          new ClipboardItem({
            'text/html': new Blob([tempDiv.innerHTML], { type: 'text/html' }),
            'text/plain': new Blob([tempDiv.textContent], { type: 'text/plain' })
          })
        ]);
        lastCaretPosition.deleteContents();
      }
    });
  }
}
window.addEventListener('DOMContentLoaded', wResize);

//htmlEkleme
function htmlEkle() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <p>${translate("add_html_code")}</p>
      <textarea></textarea>
      <button id="confirmDelete">${translate("add")}</button>
      <button id="cancelDelete">${translate("cancel")}</button>
    </div>
  `;
  document.body.appendChild(modal);
  const textarea = modal.querySelector('textarea');
  textarea.focus();
  modal.addEventListener('click', (e) => {
    if (e.target.id === 'confirmDelete' && textarea.value.trim()) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = textarea.value;
      if (lastCaretPosition) {
        lastCaretPosition.deleteContents();
        lastCaretPosition.insertNode(tempDiv);
      } else {
        const editor = document.getElementById('note-editor');
        editor.insertBefore(tempDiv, editor.firstChild);
      }
    }
    if (e.target.id === 'confirmDelete' || e.target.id === 'cancelDelete' || e.target === modal) {
      modal.remove();
    }
  });
}
//tabloEkle
const C = { M: 10, Z: '\u200B' };
const d = document;
const ce = d.createElement.bind(d);
const df = d.createDocumentFragment();
function createGrid() {
  const g = ce('div');
  g.className = 'table-grid';
  const t = ce('div');
  t.className = 'grid-cell';
  for (let i = 0; i < 25; i++) df.appendChild(t.cloneNode(true));
  g.appendChild(df);
  return g;
}
function tabloEkle() {
  const m = ce('div'), s = { r: 0, c: 0 };
  m.className = 'modal';
  m.innerHTML = `<div class="modal-content"><p>${translate("select_table_size")}</p><div class="grid"></div><button id="cancelDelete">${translate("cancel")}</button></div>`;
  const g = m.querySelector('.grid');
  for (let i = 1; i <= C.M; i++) for (let j = 1; j <= C.M; j++) {
    const c = ce('div');
    c.className = 'cell';
    c.dataset.row = i;
    c.dataset.col = j;
    g.appendChild(c);
  }
  g.addEventListener('mouseover', e => {
    if (e.target.classList.contains('cell')) {
      s.r = +e.target.dataset.row;
      s.c = +e.target.dataset.col;
      highlightCells(s.r, s.c);
    }
  });
  g.addEventListener('click', e => {
    if (e.target.classList.contains('cell')) {
      insertTable(s.r, s.c);
      m.remove();
    }
  });
  m.querySelector('#cancelDelete').addEventListener('click', () => m.remove());
  d.body.appendChild(m);
}
function highlightCells(r, c) {
  d.querySelectorAll('.cell').forEach(e =>
    e.classList.toggle('selected', +e.dataset.row <= r && +e.dataset.col <= c)
  );
}
function insertTable(r, c) {
  const h = `<th>${C.Z}</th>`.repeat(c);
  const cl = `<td>${C.Z}</td>`.repeat(c);
  const t = ce('div');
  t.innerHTML = `<table><thead><tr>${h}</tr></thead><tbody>${`<tr>${cl}</tr>`.repeat(r - 1)}</tbody></table>`;
  if (lastCaretPosition) {
    lastCaretPosition.deleteContents();
    lastCaretPosition.insertNode(t);
    lastCaretPosition.collapse(false);
  } else {
    d.getElementById('note-editor').insertBefore(t, d.getElementById('note-editor').firstChild);
  }
}
const noteEditor = document.getElementById('note-editor');
noteEditor.addEventListener('mouseup', updateCaretPosition);
noteEditor.addEventListener('keyup', updateCaretPosition);
noteEditor.addEventListener('focus', updateCaretPosition);
function updateCaretPosition() {
  const sel = window.getSelection();
  if (sel.getRangeAt && sel.rangeCount) {
    lastCaretPosition = sel.getRangeAt(0);
  } else if (document.getSelection) {
    const sel = document.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      lastCaretPosition = sel.getRangeAt(0);
    }
  }
}
window.addEventListener('DOMContentLoaded', updateCaretPosition);
// Tablo resize
const CURSOR_PADDING = 8;
const MIN_WIDTH = 20;
const MIN_HEIGHT = 50;
const DEFAULT_WIDTH = '40%';
const editor = document.getElementById('note-editor');
const state = {
  isResizing: false, currentTable: null, currentTh: null, startX: 0, startY: 0, startDimensions: { width: 0, height: 0, percentage: 0, thWidth: 0 }
};
const calculatePercentage = (pixelWidth) => (pixelWidth / editor.offsetWidth) * 100;
const createResizeHandle = () => {
  const handle = document.createElement('div');
  handle.className = 'resize-handle';
  handle.innerHTML = '↘';
  handle.style.display = 'none';
  return handle;
};
const toggleResizeHandle = (table, show) => {
  if (!table) return;
  const handle = table.querySelector('.resize-handle') ||
    (show && (() => {
      const h = createResizeHandle();
      table.style.position = 'relative';
      table.appendChild(h);
      return h;
    })());
  if (handle) handle.style.display = show ? 'block' : 'none';
};
const resetState = () => {
  if (state.currentTable) state.currentTable.style.cursor = 'auto';
  if (state.currentTh) state.currentTh.style.cursor = 'auto';
  Object.assign(state, {
    isResizing: false,
    currentTable: null,
    currentTh: null
  });
  document.body.style.userSelect = '';
};
const handleTableResize = (e, table) => {
  const rect = table.getBoundingClientRect();
  const isCorner = Math.abs(e.clientX - rect.right) <= CURSOR_PADDING &&
    Math.abs(e.clientY - rect.bottom) <= CURSOR_PADDING;
  const isRight = !isCorner && Math.abs(e.clientX - rect.right) <= CURSOR_PADDING;
  table.style.cursor = isCorner ? 'se-resize' : isRight ? 'col-resize' : 'auto';
  return { isCorner, isRight };
};
const handleCellResize = (e, cell, isHeader) => {
  if (!cell || (isHeader && cell === cell.parentNode.lastElementChild)) return false;
  const rect = cell.getBoundingClientRect();
  const isResizeArea = Math.abs(e.clientX - rect.right) <= CURSOR_PADDING;
  cell.style.cursor = isResizeArea ? 'col-resize' : 'auto';
  return isResizeArea;
};
editor.addEventListener('mousedown', (e) => {
  const table = e.target.closest('table');
  if (!table) return;
  const handle = table.querySelector('.resize-handle');
  const { isCorner, isRight } = handleTableResize(e, table);
  if (isCorner && handle && e.target === handle) {
    Object.assign(state, { isResizing: 'corner', currentTable: table, startX: e.clientX, startY: e.clientY, startDimensions: { width: table.offsetWidth, height: table.offsetHeight } });
  } else if (isRight) {
    Object.assign(state, { isResizing: 'width', currentTable: table, startX: e.clientX, startDimensions: { percentage: calculatePercentage(table.offsetWidth) } });
  } else {
    const cell = e.target.closest('th, td');
    if (!cell) return;
    const isHeader = cell.tagName === 'TH';
    const targetCell = isHeader ? cell :
      table.querySelectorAll('th')[Array.from(cell.parentNode.children).indexOf(cell)];
    if (handleCellResize(e, targetCell, isHeader)) {
      Object.assign(state, { isResizing: 'column', currentTh: targetCell, startX: e.clientX, startDimensions: { thWidth: targetCell.offsetWidth } });
    }
  }
  if (state.isResizing) {
    document.body.style.userSelect = 'none';
    e.preventDefault();
  }
});
document.addEventListener('mousemove', (e) => {
  if (!state.isResizing) {
    const table = e.target.closest('table');
    if (table) {
      handleTableResize(e, table);
      const cell = e.target.closest('th, td');
      if (cell) handleCellResize(e, cell, cell.tagName === 'TH');
    }
    return;
  }
  if (state.currentTable) {
    switch (state.isResizing) {
      case 'corner':
        const newWidth = Math.max(MIN_WIDTH, state.startDimensions.width + (e.clientX - state.startX));
        const newHeight = Math.max(MIN_HEIGHT, state.startDimensions.height + (e.clientY - state.startY));
        state.currentTable.style.width = `${newWidth}px`;
        state.currentTable.style.height = `${newHeight}px`;
        break;
      case 'width':
        const deltaPercentage = calculatePercentage(e.clientX - state.startX);
        const newPercentage = Math.max(MIN_WIDTH, Math.min(100, state.startDimensions.percentage + deltaPercentage));
        state.currentTable.style.width = `${newPercentage}%`;
        break;
    }
  } else if (state.isResizing === 'column' && state.currentTh) {
    const newWidth = Math.max(10, state.startDimensions.thWidth + (e.clientX - state.startX));
    const newPercentage = (newWidth / state.currentTh.closest('table').offsetWidth) * 100;

    Array.from(state.currentTh.closest('table').querySelectorAll('tr'))
      .forEach(row => {
        const cell = row.children[Array.from(state.currentTh.parentNode.children).indexOf(state.currentTh)];
        if (cell) cell.style.width = `${newPercentage}%`;
      });
  }
});
document.addEventListener('mouseup', resetState);
editor.addEventListener('click', (e) => {
  const table = e.target.closest('table');
  if (table && !table.style.width) table.style.width = DEFAULT_WIDTH;
});
editor.addEventListener('mouseover', e => {
  const table = e.target.closest('table');
  if (table) toggleResizeHandle(table, true);
});
editor.addEventListener('mouseout', e => {
  const table = e.target.closest('table');
  if (table) toggleResizeHandle(table, false);
});
//selectAllText
function selectAllText() {
  const editor = document.getElementById('note-editor');
  if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(editor);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
function createLink() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || selection.toString().trim() === '') {
    alert(translate("please_select_text_first"));
    return;
  }
  const range = selection.getRangeAt(0);
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
<div class="modal-content">
<p>${translate("add_link")}</p>
<input type="url" id="urlInput" class="url-input" placeholder="https://example.com" value="https://example.com">
<button id="confirmDelete">${translate("add")}</button>
<button id="cancelDelete">${translate("cancel")}</button>
</div>
    `;
  document.body.appendChild(modal);
  const urlInput = modal.querySelector('#urlInput');
  const confirmDelete = modal.querySelector('#confirmDelete');
  const cancelDelete = modal.querySelector('#cancelDelete');
  urlInput.focus();
  urlInput.select();
  function handleConfirm() {
    const url = urlInput.value;
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      range.surroundContents(link);
      selection.removeAllRanges();
    }
    closeModal();
  }
  function handleCancel() { closeModal(); }
  function closeModal() {
    document.body.removeChild(modal);
    document.removeEventListener('keydown', handleKeydown);
  }
  function handleKeydown(event) {
    if (event.key === 'Enter') {
      handleConfirm();
    }
  }
  confirmDelete.addEventListener('click', handleConfirm);
  cancelDelete.addEventListener('click', handleCancel);
  document.addEventListener('keydown', handleKeydown);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      handleCancel();
    }
  });
}
document.getElementById('note-editor').addEventListener('click', function (event) {
  const target = event.target;
  if (target.tagName === 'A') {
    event.preventDefault();
    window.open(target.href, '_blank');
  }
});
function openColorPicker() {
  const colorPicker = document.getElementById('color-picker');
  colorPicker.click();
}
function setTextColor(color) {
  formatDoc('foreColor', color);
}
document.getElementById('color-picker').addEventListener('input', function (event) {
  const selectedColor = event.target.value;
  setTextColor(selectedColor);
  const colorButton = document.getElementById('color-button');
  colorButton.style.backgroundColor = selectedColor;
});

