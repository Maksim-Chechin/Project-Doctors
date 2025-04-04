import {ref} from "vue";


export const selectSpec = {
    state() {
        return {
            specialtiesList: [
                'Акушерство',
                'Анестезиология',
                'Гастроэнтерология',
                'Гематология',
                'Гинекология',
                'Госпитальная медицина',
                'Интервенционная радиология',
                'Кардиохирургия',
                'Колопроктология',
                'Комбустиология',
                'Медицина неотложных состояний',
                'Нейрохирургия',
                'Неонатология',
                'Нефрология',
                'Общая хирургия',
                'Онкогинекология',
                'Онкология',
                'Ортопедическая хирургия',
                'Отоларингология — хирургия головы и шеи',
                'Пульмонология',
                'Реаниматология/Интенсивная терапия',
                'Сосудистая хирургия',
                'Терапия',
                'Торакальная хирургия',
                'Травматология',
                'Трансплантология',
                'Урология',
                'Челюстно-лицевая хирургия',
                'Другое',
            ],
            selectSpeciality: ref(null),
        }
    },
    namespaced: true,
}
