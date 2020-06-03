<template lang="pug">
  .tasks
    h1.tasks__title
      | Мои задачи
    .tasks__body.sticky-container
      .tasks__issues
        ul.tasks__issues-list
          li(
            v-for="(item, index) of countArray"
          ).tasks__issue
            .tasks__issue-information
              p.tasks__issue-title
               span.tasks__issue-title-bold
                  | Риск культура
               | — Сформировать мотивацию к дальнейшему развитию
              .tasks__issue-details
                multiselect(
                  v-model="valueArrayFirst[index]",
                  placeholder="Ничего не выбрано",
                  label="title",
                  track-by="title",
                  :options="optionsFirst",
                  :option-height="104",
                  :show-labels="false"
                  ).tasks__issue-detail
                    template(slot="singleLabel", slot-scope="props")
                      span(v-bind:style="{backgroundColor: props.option.color}").option__desc-active
                        img.option__image(:src="props.option.img", alt="icon image")
                        span(v-bind:style="{color: props.option.colorText}").option__title.option__title-wrap {{ props.option.title }}
                    template(slot="option", slot-scope="props")
                        .option__desc
                          img.option__image(:src="props.option.img", alt="icon image")
                          span(v-bind:style="{color: props.option.colorText}").option__title {{ props.option.title }}
                multiselect(
                  v-model="valueArraySecond[index]",
                  placeholder="Ничего не выбрано",
                  label="title",
                  track-by="title",
                  :options="optionsSecond",
                  :option-height="104",
                  :show-labels="false"
                  ).tasks__issue-detail
                    template(slot="singleLabel", slot-scope="props")
                      span(v-bind:style="{backgroundColor: props.option.color}").option__desc-active
                        img.option__image(:src="props.option.img", alt="icon image")
                        span(v-bind:style="{color: props.option.colorText}").option__title.option__title-wrap {{ props.option.title }}
                    template(slot="option", slot-scope="props")
                      .option__desc
                        img.option__image(:src="props.option.img", alt="icon image")
                        span(v-bind:style="{color: props.option.colorText}").option__title {{ props.option.title }}
                multiselect(
                  v-model="valueArrayThird[index]",
                  placeholder="Ничего не выбрано",
                  label="title",
                  track-by="title",
                  :options="optionsThird",
                  :option-height="104",
                  :show-labels="false"
                  ).tasks__issue-detail
                    template(slot="singleLabel", slot-scope="props")
                      span(v-bind:style="{backgroundColor: props.option.color}").option__desc-active
                        img.option__image(:src="props.option.img", alt="icon image")
                        span(v-bind:style="{color: props.option.colorText}").option__title.option__title-wrap {{ props.option.title }}
                    template(slot="option", slot-scope="props")
                      .option__desc
                        img.option__image(:src="props.option.img", alt="icon image")
                        span(v-bind:style="{color: props.option.colorText}").option__title {{ props.option.title }}
            .tasks__issue-actions
              .tasks__issue-date
                | 06.05.2020
              .tasks__issue-buttons
                .tasks__issue-button
                  .tasks__issue-count
                    | 0
                  a(href="javascript:void(0)").tasks__issue-link.tasks__comment
                    svg(width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg")
                      path(d="M8.4375 0.8125C9.96094 0.8125 11.3672 1.10547 12.6562 1.63281C13.9453 2.18945 14.9707 2.92188 15.7324 3.85938C16.4941 4.79688 16.875 5.79297 16.875 6.90625C16.875 8.01953 16.4941 9.04492 15.7324 9.98242C14.9707 10.9199 13.9453 11.6523 12.6562 12.1797C11.3672 12.7363 9.96094 13 8.4375 13C7.44141 13 6.47461 12.8828 5.56641 12.6484C4.18945 13.3809 2.63672 13.8203 0.908203 13.9375C0.644531 13.9668 0.439453 13.9082 0.263672 13.7617C0.0878906 13.6152 0 13.4395 0 13.2051C0 13 0.117188 12.7949 0.380859 12.5898L0.615234 12.4434C0.966797 12.209 1.20117 12.0039 1.37695 11.8281C1.61133 11.5645 1.78711 11.2129 1.93359 10.7734C1.28906 10.2461 0.820312 9.66016 0.498047 8.98633C0.146484 8.3418 0 7.63867 0 6.90625C0 5.79297 0.380859 4.79688 1.14258 3.85938C1.9043 2.92188 2.92969 2.18945 4.21875 1.63281C5.50781 1.10547 6.91406 0.8125 8.4375 0.8125ZM8.4375 12.0625C9.78516 12.0625 11.0156 11.8281 12.1875 11.3594C13.3301 10.8906 14.2383 10.2754 14.9121 9.48438C15.5859 8.69336 15.9375 7.84375 15.9375 6.90625C15.9375 5.99805 15.5859 5.14844 14.9121 4.35742C14.2383 3.56641 13.3301 2.92188 12.1875 2.45312C11.0156 1.98438 9.78516 1.75 8.4375 1.75C7.08984 1.75 5.83008 1.98438 4.6875 2.45312C3.51562 2.92188 2.60742 3.56641 1.93359 4.35742C1.25977 5.14844 0.9375 5.99805 0.9375 6.90625C0.9375 7.60938 1.11328 8.25391 1.52344 8.86914C1.875 9.45508 2.34375 9.95312 2.95898 10.4219C2.8418 11.0371 2.66602 11.5352 2.40234 11.916C2.10938 12.3555 1.61133 12.7949 0.9375 13.2344C2.43164 13.0586 3.92578 12.502 5.44922 11.623C6.38672 11.916 7.38281 12.0625 8.4375 12.0625Z" fill="#B4B7BB")
                      path(d="M8.4375 12.0625C9.78516 12.0625 11.0156 11.8281 12.1875 11.3594C13.3301 10.8906 14.2383 10.2754 14.9121 9.48438C15.5859 8.69336 15.9375 7.84375 15.9375 6.90625C15.9375 5.99805 15.5859 5.14844 14.9121 4.35742C14.2383 3.56641 13.3301 2.92188 12.1875 2.45312C11.0156 1.98438 9.78516 1.75 8.4375 1.75C7.08984 1.75 5.83008 1.98438 4.6875 2.45312C3.51562 2.92188 2.60742 3.56641 1.93359 4.35742C1.25977 5.14844 0.9375 5.99805 0.9375 6.90625C0.9375 7.60938 1.11328 8.25391 1.52344 8.86914C1.875 9.45508 2.34375 9.95312 2.95898 10.4219C2.8418 11.0371 2.66602 11.5352 2.40234 11.916C2.10938 12.3555 1.61133 12.7949 0.9375 13.2344C2.43164 13.0586 3.92578 12.502 5.44922 11.623C6.38672 11.916 7.38281 12.0625 8.4375 12.0625Z" fill="white")
                .tasks__issue-button
                  .tasks__issue-count
                    | 2
                  a(href="javascript:void(0)").tasks__issue-link.tasks__star
                    svg(width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg")
                      path(d="M15.4688 5.88575C15.7031 5.94434 15.9082 6.06153 16.0547 6.23731C16.2012 6.44239 16.2598 6.64746 16.2598 6.88184C16.2598 7.11621 16.1719 7.32129 15.9961 7.49707L12.8906 10.5147L13.623 14.792C13.6523 15.0264 13.5938 15.2608 13.4766 15.4658C13.3594 15.6709 13.1836 15.7881 12.9492 15.8467C12.7148 15.9053 12.4805 15.876 12.2754 15.7588L8.4375 13.7666L4.59961 15.7588C4.36523 15.876 4.16016 15.9053 3.92578 15.8467C3.69141 15.7881 3.48633 15.6709 3.36914 15.4658C3.25195 15.2608 3.19336 15.0264 3.25195 14.792L3.98438 10.5147L0.878906 7.49707C0.703125 7.32129 0.585938 7.11621 0.585938 6.88184C0.585938 6.64746 0.644531 6.44239 0.791016 6.23731C0.9375 6.06153 1.14258 5.94434 1.40625 5.88575L5.68359 5.27051L7.58789 1.40332C7.70508 1.16895 7.85156 1.02246 8.08594 0.93457C8.32031 0.875976 8.52539 0.875976 8.75977 0.93457C8.99414 1.02246 9.16992 1.16895 9.28711 1.40332L11.1914 5.27051L15.4688 5.88575ZM11.8945 10.1924L15.3516 6.82325L10.5762 6.12012L8.4375 1.81348L6.29883 6.12012L1.55273 6.82325L4.98047 10.1924L4.18945 14.9385L8.4375 12.6826L12.7148 14.9385L11.8945 10.1924Z" fill="#B4B7BB")
                      path(d="M11.8926 10.1914L15.3497 6.82227L10.5743 6.11914L8.43555 1.8125L6.29688 6.11914L1.55078 6.82227L4.97852 10.1914L4.1875 14.9375L8.43555 12.6816L12.7129 14.9375L11.8926 10.1914Z" fill="white")
        a(href="javascript:void(0)").tasks__filter-load-more
          .tasks__filter-load-btn
            | Загрузить еще
      .tasks__filter
        .tasks__filter-body
          .tasks__filter-body-top
            .tasks__filter-sort
              .tasks__filter-sort-title
                | Сортировать:
              a(href="javascript:void(0)").tasks__filter-sort-target
                | по дате
            a(href="javascript:void(0)").tasks__filter-image
              img(src="images/tasks/sort.svg")
          .tasks__filter-selects
            multiselect(
              v-model="valueFilterFirst",
              placeholder="Ничего не выбрано",
              label="title",
              track-by="title",
              :options="optionFilterFirst",
              :option-height="104",
              :show-labels="false"
            ).tasks__filter-select
              template(slot="singleLabel", slot-scope="props")
                span.option__select-active
                  span.option__select-title.option__select-title-active {{ props.option.title }}
              template(slot="option", slot-scope="props")
                .option__desc
                  label.checkbox
                    input(type="checkbox")
                    .checkbox__hide
                  span.option__select-title {{ props.option.title }}
            multiselect(
              v-model="valueFilterSecond",
              placeholder="Ничего не выбрано",
              label="title",
              track-by="title",
              :options="optionFilterSecond",
              :option-height="104",
              :show-labels="false"
            ).tasks__filter-select
              template(slot="singleLabel", slot-scope="props")
                span.option__select-active
                  span.option__select-title.option__select-title-active {{ props.option.title }}
              template(slot="option", slot-scope="props")
                .option__desc
                  label.checkbox
                    input(type="checkbox")
                    .checkbox__hide
                  span.option__select-title {{ props.option.title }}
            multiselect(
              v-model="valueFilterThird",
              placeholder="Ничего не выбрано",
              label="title",
              track-by="title",
              :options="optionFilterThird",
              :option-height="104",
              :show-labels="false"
            ).tasks__filter-select
              template(slot="singleLabel", slot-scope="props")
                span.option__select-active
                  span.option__select-title.option__select-title-active {{ props.option.title }}
              template(slot="option", slot-scope="props")
                .option__desc
                  label.checkbox
                    input(type="checkbox")
                    .checkbox__hide
                  span.option__select-title {{ props.option.title }}
            multiselect(
              v-model="valueFilterFourth",
              placeholder="Ничего не выбрано",
              label="title",
              track-by="title",
              :options="optionFilterFourth",
              :option-height="104",
              :show-labels="false"
            ).tasks__filter-select
              template(slot="singleLabel", slot-scope="props")
                span.option__select-active
                  span.option__select-title.option__select-title-active {{ props.option.title }}
              template(slot="option", slot-scope="props")
                .option__desc
                  label.checkbox
                    input(type="checkbox")
                    .checkbox__hide
                  span.option__select-title {{ props.option.title }}
            multiselect(
              v-model="valueFilterFifth",
              placeholder="Ничего не выбрано",
              label="title",
              track-by="title",
              :options="optionFilterFifth",
              :option-height="104",
              :show-labels="false"
            ).tasks__filter-select
              template(slot="singleLabel", slot-scope="props")
                span.option__select-active
                  span.option__select-title.option__select-title-active {{ props.option.title }}
              template(slot="option", slot-scope="props")
                .option__desc
                  label.checkbox
                    input(type="checkbox")
                    .checkbox__hide
                  span.option__select-title {{ props.option.title }}
        a(href="javascript:void(0)").tasks__filter-reset
          .tasks__filter-reset-btn
            | Очистить фильтр
</template>

<script>
  import Multiselect from 'vue-multiselect'
  import 'vue-multiselect/dist/vue-multiselect.min.css'

  export default {
    name: 'Tasks',
    components: {
      Multiselect,
    },
    data () {
      return {
        countArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        valueArrayFirst: [
          { img: 'images/tasks/icon1.svg', title: 'В Работе', color: '#D9F5E6', colorText: '#32C979'},
          { img: 'images/tasks/icon1.svg', title: 'В Работе', color: '#D9F5E6', colorText: '#32C979'},
          { img: 'images/tasks/icon1.svg', title: 'В Работе', color: '#D9F5E6', colorText: '#32C979'},
          { img: 'images/tasks/icon1.svg', title: 'В Работе', color: '#D9F5E6', colorText: '#32C979'},
          { img: 'images/tasks/icon1.svg', title: 'В Работе', color: '#D9F5E6', colorText: '#32C979'},
          { img: 'images/tasks/icon1.svg', title: 'В Работе', color: '#D9F5E6', colorText: '#32C979'},
          { img: 'images/tasks/icon1.svg', title: 'В Работе', color: '#D9F5E6', colorText: '#32C979'},
          { img: 'images/tasks/icon1.svg', title: 'В Работе', color: '#D9F5E6', colorText: '#32C979'},
          { img: 'images/tasks/icon1.svg', title: 'В Работе', color: '#D9F5E6', colorText: '#32C979'},
          { img: 'images/tasks/icon1.svg', title: 'В Работе', color: '#D9F5E6', colorText: '#32C979'},
        ],
        optionsFirst: [
          { img: 'images/tasks/icon1.svg', title: 'Сделан', color: '#25B419', colorText: '#065535'},
          { img: 'images/tasks/icon1.svg', title: 'Пауза', color: '#F1F3F5' , colorText: '#93979B'},
          { img: 'images/tasks/icon1.svg', title: 'В работе', color: '#D9F5E6' , colorText: '#32C979'},
          { img: 'images/tasks/icon1.svg', title: 'Новый', color: '#F9E6D9', colorText: '#FF8330' }
        ],
        valueArraySecond: [
          { img: 'images/tasks/icon2.svg', title: 'Константин Сергеев', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин Сергеев', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин Сергеев', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин Сергеев', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин Сергеев', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин Сергеев', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин Сергеев', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин Сергеев', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин Сергеев', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин Сергеев', color: '#F1F3F5', colorText: '#93979B'},
        ],
        optionsSecond: [
          { img: 'images/tasks/icon2.svg', title: 'Владислав Рыбкин', color: '#D9F5E6', colorText: '#32C979'},
          { img: 'images/tasks/icon2.svg', title: 'Дмитрий Аравин', color: '#25B419', colorText: '#065535' },
          { img: 'images/tasks/icon2.svg', title: 'Константин Сергеев', color: '#F1F3F5' , colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Артур Дробный', color: '#F9E6D9', colorText: '#FF8330' }
        ],
        valueArrayThird: [
          { img: 'images/tasks/icon3.svg', title: 'Максимум', color: '#F9E6D9', colorText: '#FF8330'},
          { img: 'images/tasks/icon3.svg', title: 'Максимум', color: '#F9E6D9', colorText: '#FF8330'},
          { img: 'images/tasks/icon3.svg', title: 'Максимум', color: '#F9E6D9', colorText: '#FF8330'},
          { img: 'images/tasks/icon3.svg', title: 'Максимум', color: '#F9E6D9', colorText: '#FF8330'},
          { img: 'images/tasks/icon3.svg', title: 'Максимум', color: '#F9E6D9', colorText: '#FF8330'},
          { img: 'images/tasks/icon3.svg', title: 'Максимум', color: '#F9E6D9', colorText: '#FF8330'},
          { img: 'images/tasks/icon3.svg', title: 'Максимум', color: '#F9E6D9', colorText: '#FF8330'},
          { img: 'images/tasks/icon3.svg', title: 'Максимум', color: '#F9E6D9', colorText: '#FF8330'},
          { img: 'images/tasks/icon3.svg', title: 'Максимум', color: '#F9E6D9', colorText: '#FF8330'},
          { img: 'images/tasks/icon3.svg', title: 'Максимум', color: '#F9E6D9', colorText: '#FF8330'},
        ],
        optionsThird: [
          { img: 'images/tasks/icon3.svg', title: 'Низкий', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon3.svg', title: 'Средне', color: '#25B419' , colorText: '#065535'},
          { img: 'images/tasks/icon3.svg', title: 'Максимум', color: '#F9E6D9' , colorText: '#FF8330'},
          { img: 'images/tasks/icon3.svg', title: 'Высокий', color: '#D9F5E6', colorText: '#32C979' }
        ],
        valueFilterFirst: {title: 'Проект'},
        optionFilterFirst: [
          { title: 'Pinkbus' },
          { title: 'Insberra' },
          { title: 'Odeon' },
          { title: 'CoreClass' }
        ],
        valueFilterSecond: {title: 'Статус'},
        optionFilterSecond: [
          { title: 'В работе' },
          { title: 'Сделан' },
          { title: 'Пауза' },
          { title: 'Новый' }
        ],
        valueFilterThird: {title: 'Приоритет'},
        optionFilterThird: [
          { title: 'Низкий' },
          { title: 'Средний' },
          { title: 'Высокий' },
          { title: 'Максимальный' }
        ],
        valueFilterFourth: {title: 'Автор'},
        optionFilterFourth: [
          { title: 'Константин' },
          { title: 'Владислав' },
          { title: 'Дмитрий' },
          { title: 'Артур' }
        ],
        valueFilterFifth: {title: 'Участие'},
        optionFilterFifth: [
          { title: 'Константин' },
          { title: 'Владислав' },
          { title: 'Дмитрий' },
          { title: 'Артур' }
        ]
      }
    },
  }
</script>
