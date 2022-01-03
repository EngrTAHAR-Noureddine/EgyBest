import {flex_styles} from "../Styles/styles";


export default class String{

    constructor(prop) {
        this.isArabic = prop;
    }


    toggle(change){
        this.isArabic = change;
    }

    LOGO_EGY = 'Egy';
    LOGO_BEST = 'Best';

    JUSTIFY_DIRECTION = ()=> ((this.isArabic)?'right':'left');
    RIGHT_LEFT = ()=> ((this.isArabic)?'right':'left');
    ROW_REVERSE = ()=> ((this.isArabic)?'row-reverse':'row');
    REVERSE_ROW = ()=> ((this.isArabic)?'row':'row-reverse');
    FLEX_STYLE_ROW_DIRECTION =()=> ((this.isArabic)?flex_styles.row_right:flex_styles.row_left);



    LANGUAGE_TOGGLE = ()=> ((this.isArabic)?'عربي':'English');
    MOVIES = ()=> ((this.isArabic)?'أفلام':'Movies');
    SERIES = ()=> ((this.isArabic)?'مسلسلات':'Series');
    THEATER =()=> ((this.isArabic)?'مسرحيات':'Theater');
    WWE = ()=> ((this.isArabic)?'مصارعة':'Wwe');
    SIGNUP = ()=> ((this.isArabic)?'إشتراك':'SignUp');
    SIGNIN = ()=> ((this.isArabic)?'تسجيل':'SignIn');
    SIGNOUT = ()=>((this.isArabic)?'الخروج':'SignOut');
    LIBRARY = ()=>((this.isArabic)?'مكتبتي':'Library');
    NOTIFICATIONS = ()=>((this.isArabic)?'إشعارات':'Notifications');
    SETTINGS=()=>((this.isArabic)?'اعدادات':'Settings');
    HOME = ()=> ((this.isArabic)?'الرئيسية':'Home');
    //**************************************************************************************************
    MORE = ()=> ((this.isArabic)?'المزيد':'MORE');
    LATEST_ADDITIONS = ()=> ((this.isArabic)?'اخر الاضافات':'Latest Additions');
    MOST_WATCHED = ()=> ((this.isArabic)?'الاكثر مشاهدة':'Most Watched');
    //*********************************************************************************************
    NOTIFICATION_TEXT = ()=> ((this.isArabic)?'The blacklist تم اضافة حلقة جديدة لمسلسل ':'A new episode has been added to the series The blacklist');
    NOTIFICATION_NOT_EXIST = ()=> ((this.isArabic)?'ﻻ توجد إشعارات':'There are no notification');
    //*********************************************************************************************
    SEARCH = ()=> ((this.isArabic)?': البحث':'Search :');
    SEARCH_PLACEHOLDER = ()=> ((this.isArabic)?'بحث':'Search...');
    NOT_FOUND=()=>((this.isArabic)?'ﻻ يوجد':'There is no');
    //******************************************************************************************
    PAGE_NOT_FOUND = ()=> ((this.isArabic)?'الصفحة غير موجودة':'Page not found');
    //******************************************************************************************
    SIGN_UP = ()=> ((this.isArabic)?'تسجيل الاشتراك':'Sign Up');
    SIGN_IN = ()=> ((this.isArabic)?'تسجيل الدخول':'SIGN IN');
    //**********************************************************************************************
    EMAIL = ()=> ((this.isArabic)?':عنوان الالكتروني':'Email:');
    PASSWORD = ()=> ((this.isArabic)?':كلمة السر':'Password:');
    NAME = ()=> ((this.isArabic)?':الاسم':'Name:');
    FORGET_PASSWORD = ()=> ((this.isArabic)?'هل نسيت كلمة السر؟':'do you forget a password?');
    OR_SIGN_IN_WITH = ()=> ((this.isArabic)?':أو التسجبل ب':'or sign in with:');
    DONT_HAVE_ACCOUNT = ()=> ((this.isArabic)?'ليس لديك حساب؟':'don\'t have account?');
    OR_SIGN_UP_WITH = ()=> ((this.isArabic)?':أو الاشتراك ب':'or sign up with');
    HAVE_ACCOUNT = ()=> ((this.isArabic)?'هل لديك حساب؟':'do you have an account?');
    //*******************************************************************************************
    REMOVE_ACCOUNT_ASKING = ()=> ((this.isArabic)?'هل تريد إزالة الحساب؟':'do you want to remove your account?');
    REMOVE_ACCOUNT = ()=> ((this.isArabic)?'إزالة الحساب':'Remove account');
    Old_PASSWORD = ()=> ((this.isArabic)?':كلمة المرور الحالية':'Old Password:');
    NEW_PASSWORD= ()=> ((this.isArabic)?':كلمة المرور الجديدة':'New Password:');
    REWRITE_PASSWORD = ()=> ((this.isArabic)?':إعادة كلمة المرور':'Rewrite Password:');
    EDIT = ()=> ((this.isArabic)?'تغيير':'Edit');
    SAVE = ()=> ((this.isArabic)?'حفظ':'Save');
    //*************************************************************************************

    FOLLOW_US = ()=> ((this.isArabic)?':تابعونا على':'Follow us on:');

    //********************************************************************

    WORKS = ()=> ((this.isArabic)?'الاعمال (30)':'Works (30)');

    //************************************************************************************
    ACTOR = ()=> ((this.isArabic)?'الممثلين':'Actors');
    SEASONS = ()=> ((this.isArabic)?'المواسم':'Seasons');
    EPISODES = ()=> ((this.isArabic)?'الحلقات':'Episodes');
    SIMILAR = ()=> ((this.isArabic)?'المشابهة':'Similar');
    COMMENTS = ()=> ((this.isArabic)?'التعليقات':'Comments');
    COMMENT = ()=> ((this.isArabic)?'تعليق':'Comment');
    COMMENT_PLACEHOLDER = ()=> ((this.isArabic)?'تعليق...':'Comment...');
    COMMENTS_NOT_EXIST = ()=> ((this.isArabic)?'ﻻ توجد تعليقات':'There are no comments');
    DOWNLOAD = ()=> ((this.isArabic)?'التحميل':'Download');
    WATCH_TOGETHER = ()=> ((this.isArabic)?'مشاهدة جماعية':'Watch together');
    MINUTE = ()=> ((this.isArabic)?'دقيقة':'min');
    //**************************************************************************
    NAME_MOVIE = ()=> ((this.isArabic)?' :الاسم بالعربي ':'Name: ');
    CLASSIFICATION = ()=> ((this.isArabic)?':التصنيف ':'Classification: ');
    COUNTRY = ()=> ((this.isArabic)?':الدولة':'Country: ');
    LANGUAGE = ()=> ((this.isArabic)?':اللغة ':'Language: ');
    TYPE = ()=> ((this.isArabic)?':النوع ':'Type: ');
    QUALITY = ()=> ((this.isArabic)?' :الجودة ':'Quality: ');
    DURATION = ()=> ((this.isArabic)?':المدة ':'Duration: ');
    SUBTITLES = ()=> ((this.isArabic)?':الترجمة ':'Subtitles: ');

    NEXT = ()=> ((this.isArabic)?'التالي':'Next');
    PREVIOUS = ()=> ((this.isArabic)?'السابق':'Previous');


    LIKE_IT = ()=> ((this.isArabic)?'أعجبني':'I like it');
    HATE_IT = ()=> ((this.isArabic)?'لم يعجبني':'I hate it');
    YOUR_RATING = ()=> ((this.isArabic)?'تقييمك':'Your rating');
    ADD_INTO_LIBRARY = ()=> ((this.isArabic)?'حفظ في المكتبة':'Add to library');
    ADDED_INTO_LIBRARY = ()=> ((this.isArabic)?'تم الحفظ في المكتبة':'Saved in the library');

    //***********************************************************************
    FILTER = ()=> ((this.isArabic)?'بحث':'Filter');
    CLEAR = ()=> ((this.isArabic)?'مسح':'Clear');

    ARABIC_INITIAL_FILTER=()=>({
        Language:'اللغة',
        Status:'الدقة',
        Quality:'الجودة',
        Year:'العام',
        Country:'الدولة',
        Category:'الفئة',
        Type:'النوع',
        Translate:'الترجمة'
    });

    ARABIC_FILTER_LIST=()=>([

        {
            type:'اللغة',
            list:['إنجليزي','العربية','فرنسي','ألماني','ياباني','صيني','إسباني']
        },
        {
            type:'الدقة',
            list:['360px','480px','720px','1080px','2k','4k','8k']
        },
        {
            type:'الجودة',
            list:['BluRay','WEB-DL','DVDRip','HDRip','HDTC','HDTS','HDTV']
        },
        {
            type:'العام',
            list:['2021','2020','2019','2018','2017','2016','2015']
        },
        {
            type:'الدولة',
            list:['الولايات','انجلترا','فرنسا','هند','يابان','ايطاليا','روسيا']
        },
        {
            type:'الفئة',
            list:['R','PG-13','TV-14','TV-MA','TV-PG','TV-Y','TV-Y7']
        },
        {
            type:'النوع',
            list:['Action','History','Crime','Drama','War','Sci-fi','Romantic']
        },
        {
            type:'الترجمة',
            list:['إنجليزي','العربية','فرنسي','ألماني','ياباني','صيني','إسباني']
        }
    ]);

    INITIAL_FILTER = ()=>((this.isArabic)?{
        Language:'اللغة',
        Status:'الدقة',
        Quality:'الجودة',
        Year:'العام',
        Country:'الدولة',
        Category:'الفئة',
        Type:'النوع',
        Translate:'الترجمة'
    }:{
        Language:'Language',
        Status:'Status',
        Quality:'Quality',
        Year:'Year',
        Country:'Country',
        Category:'Category',
        Type:'Type',
        Translate:'Translate'
    });
    FILTER_LIST = ()=> ((this.isArabic)?[

        {
            type:'اللغة',
            list:['إنجليزي','العربية','فرنسي','ألماني','ياباني','صيني','إسباني']
        },
        {
            type:'الدقة',
            list:['360px','480px','720px','1080px','2k','4k','8k']
        },
        {
            type:'الجودة',
            list:['BluRay','WEB-DL','DVDRip','HDRip','HDTC','HDTS','HDTV']
        },
        {
            type:'العام',
            list:['2021','2020','2019','2018','2017','2016','2015']
        },
        {
            type:'الدولة',
            list:['الولايات','انجلترا','فرنسا','هند','يابان','ايطاليا','روسيا']
        },
        {
            type:'الفئة',
            list:['R','PG-13','TV-14','TV-MA','TV-PG','TV-Y','TV-Y7']
        },
        {
            type:'النوع',
            list:['Action','History','Crime','Drama','War','Sci-fi','Romantic']
        },
        {
            type:'الترجمة',
            list:['إنجليزي','العربية','فرنسي','ألماني','ياباني','صيني','إسباني']
        }
    ]:[

        {
            type:'Language',
            list:['English','Arabic','French','German','Japanese','Chinese','Spanish']
        },
        {
            type:'Status',
            list:['360px','480px','720px','1080px','2k','4k','8k']
        },
        {
            type:'Quality',
            list:['BluRay','WEB-DL','DVDRip','HDRip','HDTC','HDTS','HDTV']
        },
        {
            type:'Year',
            list:['2021','2020','2019','2018','2017','2016','2015']
        },
        {
            type:'Country',
            list:['USA','England','France','India','Japan','Italy','Russia']
        },
        {
            type:'Category',
            list:['R','PG-13','TV-14','TV-MA','TV-PG','TV-Y','TV-Y7']
        },
        {
            type:'Type',
            list:['Action','History','Crime','Drama','War','Sci-fi','Romantic']
        },
        {
            type:'Translate',
            list:['English','Arabic','French','German','Japanese','Chinese','Spanish']
        }
    ]);

    LIST_SHORTCUTS = ()=> ((this.isArabic)?['القائمة','2021' ,'اكثر مشاهدة']:['List','2021' ,'Trending']);


    STORY = ()=> ((this.isArabic)?'أفلام':
        'When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids.');





}