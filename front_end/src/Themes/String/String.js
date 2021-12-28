export class String{

    LOGO_EGY = 'Egy';
    LOGO_BEST = 'Best';
    MOVIES = (isArabic)=>((isArabic)?'أفلام':'Movies');
    SERIES = (isArabic)=>((isArabic)?'مسلسلات':'Series');
    THEATER = (isArabic)=>((isArabic)?'مسرحيات':'THEATER');
    WWE = (isArabic)=>((isArabic)?'مصارعة':'WWE');
    SIGNUP = (isArabic)=>((isArabic)?'إشتراك':'SIGNUP');
    SIGNIN = (isArabic)=>((isArabic)?'تسجيل':'SIGNIN');
    HOME = (isArabic)=>((isArabic)?'الرئيسية':'Home');
    //**************************************************************************************************
    MORE = (isArabic)=>((isArabic)?'المزيد':'MORE');
    LATEST_ADDITIONS = (isArabic)=>((isArabic)?'اخر الاضافات':'Latest Additions');
    MOST_WATCHED = (isArabic)=>((isArabic)?'الاكثر مشاهدة':'Most Watched');
    //*********************************************************************************************
    SEARCH = (isArabic)=>((isArabic)?'البحث :':'Search :');
    SEARCH_PLACEHOLDER = (isArabic)=>((isArabic)?'بحث...':'Search...');
    //******************************************************************************************
    PAGE_NOT_FOUND = (isArabic)=>((isArabic)?'الصفحة غير موجودة':'Page not found');
    //******************************************************************************************
    SIGN_UP = (isArabic)=>((isArabic)?'تسجيل الاشتراك':'Sign Up');
    SIGN_IN = (isArabic)=>((isArabic)?'تسجيل الدخول':'SIGN_IN');
    //**********************************************************************************************
    EMAIL = (isArabic)=>((isArabic)?'عنوان الالكتروني :':'Email:');
    PASSWORD = (isArabic)=>((isArabic)?'كلمة السر :':'Password:');
    NAME = (isArabic)=>((isArabic)?'الاسم :':'Name:');
    FORGET_PASSWORD = (isArabic)=>((isArabic)?'هل نسيت كلمة السر؟':'do you forget a password?');
    OR_SIGN_IN_WITH = (isArabic)=>((isArabic)?'أو التسجبل ب:':'or sign in with:');
    DONT_HAVE_ACCOUNT = (isArabic)=>((isArabic)?'ليس لديك حساب؟':'don\'t have account?');
    OR_SIGN_UP_WITH = (isArabic)=>((isArabic)?'أو الاشتراك ب:':'or sign up with');
    HAVE_ACCOUNT = (isArabic)=>((isArabic)?'هل لديك حساب؟':'do you have an account?');
    //*******************************************************************************************
    REMOVE_ACCOUNT_ASKING = (isArabic)=>((isArabic)?'هل تريد إزالة الحساب؟':'do you want to remove your account?');
    REMOVE_ACCOUNT = (isArabic)=>((isArabic)?'إزالة الحساب':'Remove account');
    Old_PASSWORD = (isArabic)=>((isArabic)?'كلمة المرور الحالية:':'Old Password:');
    NEW_PASSWORD= (isArabic)=>((isArabic)?'كلمة المرور الجديدة:':'New Password:');
    REWRITE_PASSWORD = (isArabic)=>((isArabic)?'إعادة كلمة المرور:':'Rewrite Password:');
    EDIT = (isArabic)=>((isArabic)?'تغيير':'Edit');
    SAVE = (isArabic)=>((isArabic)?'حفظ':'Save');
    //*************************************************************************************

    FOLLOW_US = (isArabic)=>((isArabic)?'تابعونا على:':'Follow us on:');

    //********************************************************************

    WORKS = (isArabic)=>((isArabic)?'الاعمال':'Works');

    //************************************************************************************
    ACTOR = (isArabic)=>((isArabic)?'الممثلين':'Actors');
    SEASONS = (isArabic)=>((isArabic)?'المواسم':'Seasons');
    EPISODES = (isArabic)=>((isArabic)?'الحلقات':'Episodes');
    SIMILAR = (isArabic)=>((isArabic)?'المتشابهة':'Similar');
    COMMENTS = (isArabic)=>((isArabic)?'التعليقات':'Comments');
    COMMENT = (isArabic)=>((isArabic)?'تعليق':'Comment');
    COMMENT_PLACEHOLDER = (isArabic)=>((isArabic)?'تعليق...':'Comment...');
    COMMENTS_NOT_EXIST = (isArabic)=>((isArabic)?'ﻻ توجد تعليقات':'There are no comments');
    DOWNLOAD = (isArabic)=>((isArabic)?'التحميل':'Download');
    MINUTE = (isArabic)=>((isArabic)?'دقيقة':'min');
    //**************************************************************************
    NAME_MOVIE = (isArabic)=>((isArabic)?'الاسم بالعربي: ':'Name: ');
    CLASSIFICATION = (isArabic)=>((isArabic)?'التصنيف: ':'Classification: ');
    COUNTRY = (isArabic)=>((isArabic)?'الدولة: ':'Country: ');
    LANGUAGE = (isArabic)=>((isArabic)?'اللغة: ':'Language: ');
    TYPE = (isArabic)=>((isArabic)?'النوع: ':'Type: ');
    QUALITY = (isArabic)=>((isArabic)?'الجودة: ':'Quality: ');
    DURATION = (isArabic)=>((isArabic)?'المدة: ':'Duration: ');
    SUBTITLES = (isArabic)=>((isArabic)?'الترجمة: ':'Subtitles: ');

    NEXT = (isArabic)=>((isArabic)?'التالي':'Next');
    PREVIOUS = (isArabic)=>((isArabic)?'السابق':'Previous');


    LIKE_IT = (isArabic)=>((isArabic)?'أعجبني':'I like it');
    HATE_IT = (isArabic)=>((isArabic)?'لم يعجبني':'I hate it');
    YOUR_RATING = (isArabic)=>((isArabic)?'تقييمك':'Your rating');

    //***********************************************************************
    FILTER = (isArabic)=>((isArabic)?'بحث':'Filter');
    CLEAR = (isArabic)=>((isArabic)?'مسح':'Clear');
    FILTER_LIST = (isArabic)=>((isArabic)?[

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

    LIST_SHORTCUTS = (isArabic)=>((isArabic)?['القائمة','2021' ,'اكثر مشاهدة']:['List','2021' ,'Trending']);


    STORY = (isArabic)=>((isArabic)?'أفلام':
        'When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids.');





}