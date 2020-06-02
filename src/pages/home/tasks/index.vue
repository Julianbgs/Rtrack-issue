<template lang="pug">
  .tasks
    h1.tasks__title
      | Мои задачи
    .tasks__body
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
                        span(v-bind:style="{color: props.option.colorText}").option__title {{ props.option.title }}
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
                        span(v-bind:style="{color: props.option.colorText}").option__title {{ props.option.title }}
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
                        span(v-bind:style="{color: props.option.colorText}").option__title {{ props.option.title }}
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
                  a(href="javascript:void(0)").tasks__issue-link
                    img(src="images/tasks/comment.svg")
                .tasks__issue-button
                  .tasks__issue-count
                    | 2
                  a(href="javascript:void(0)").tasks__issue-link
                    img(src="images/tasks/star.svg")
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
                  span.option__select-title {{ props.option.title }}
              template(slot="option", slot-scope="props")
                .option__desc
                  input(type="checkbox").option__select-checkbox
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
                  span.option__select-title {{ props.option.title }}
              template(slot="option", slot-scope="props")
                .option__desc
                  input(type="checkbox").option__select-checkbox
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
                  span.option__select-title {{ props.option.title }}
              template(slot="option", slot-scope="props")
                .option__desc
                  input(type="checkbox").option__select-checkbox
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
                  span.option__select-title {{ props.option.title }}
              template(slot="option", slot-scope="props")
                .option__desc
                  input(type="checkbox").option__select-checkbox
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
                  span.option__select-title {{ props.option.title }}
              template(slot="option", slot-scope="props")
                .option__desc
                  input(type="checkbox").option__select-checkbox
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
      Multiselect
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
          { img: 'images/tasks/icon2.svg', title: 'Константин', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин', color: '#F1F3F5', colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Константин', color: '#F1F3F5', colorText: '#93979B'},
        ],
        optionsSecond: [
          { img: 'images/tasks/icon2.svg', title: 'Владислав', color: '#D9F5E6', colorText: '#32C979'},
          { img: 'images/tasks/icon2.svg', title: 'Дмитрий', color: '#25B419', colorText: '#065535' },
          { img: 'images/tasks/icon2.svg', title: 'Константин', color: '#F1F3F5' , colorText: '#93979B'},
          { img: 'images/tasks/icon2.svg', title: 'Артур', color: '#F9E6D9', colorText: '#FF8330' }
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
