---
label: emoji chapter1
index: 0
text: github emoji
---

{% assign emojis = site.data.emojis -%}
<div id="articles-github-emoji" class="d-flex w-100 h-100 include-container-lazyload-img">
  <div id="github-emoji_group_scrollspy_navbar" class="h-100" style="font-size:12px;">
    <nav class="nav nav-pills h-100 d-flex flex-column flex-nowrap border-end scrollbar scrollbar-blue overflow-y-auto" style="width:40px;">
    {% assign emojis_group = "a" -%}
    {% for emoji in emojis -%}
        {% assign emoji_temp = emoji -%}
        {% assign emoji_first_char = emoji | strip | downcase | split: "" | first -%}
        {% case emoji_first_char -%}
            {% when "+", "-" -%}
                {% if emoji_first_char == "+" -%}
                    {% assign emoji_temp = emoji | replace_first: "+", "" -%}
                {% endif -%}
                {% assign emoji_first_char = "char" -%}
            {% when "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" -%}
                {% assign emoji_first_char = "0-9" -%}
        {% endcase -%}
        {% if emoji_first_char != emojis_group -%}
            {% assign emojis_group = emoji_first_char -%}
            <a class="nav-link text-center p-0" style="border-radius:2px;" href="#github-emoji_{{- emoji_temp -}}_{{- emojis_group -}}-group_scrollspy">{{- emojis_group -}}</a>
        {% endif -%}
    {% endfor -%}
    </nav>
  </div>
  <div class="h-100">
    <div data-bs-spy="scroll" data-bs-target="#github-emoji_group_scrollspy_navbar" data-bs-smooth-scroll="true" class="d-flex justify-content-evenly flex-wrap scrollbar scrollbar-blue h-100 overflow-y-auto" tabindex="0"> 
    {% assign emojis_group = "a" -%}
    {% for emoji in emojis-%}
        {% assign emoji_temp = emoji -%}
        {% assign emoji_first_char = emoji | strip | downcase | split: "" | first -%}
        {% case emoji_first_char -%}
            {% when "+", "-" -%}
                {% if emoji_first_char == "+" -%}
                    {% assign emoji_temp = emoji | replace_first: "+", "" -%}
                {% endif -%}
                {% assign emoji_first_char = "char" -%}
            {% when "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" -%}
                {% assign emoji_first_char = "0-9" -%}
        {% endcase -%}
        {% if emoji_first_char != emojis_group -%}
            {% assign emojis_group = emoji_first_char -%}
            <div class="w-100 bg-body-tertiary ms-2 border-bottom fs-5 fw-bold" style="height:30px;line-height:30px;font-weight:bloder;" id="github-emoji_{{- emoji_temp -}}_{{- emojis_group -}}-group_scrollspy">
                {{- emojis_group -}}
            </div>
        {% endif -%}
        <div class="card my-1" style="min-width: 160px;max-width:220px;min-height:50px;max-height:60px;">
            <a class="row g-0 d-flex justify-content-between align-items-center text-decoration-none" style="height:30px;" data-bs-toggle="collapse" href="#github-emoji_{{- emoji_temp -}}-card-description_collapse" role="button" aria-expanded="false" aria-controls="github-emoji_{{- emoji_temp -}}-card-description_collapse">
                <div class="col-8 text-truncate p-0 ps-2">
                    :{{- emoji -}}:
                </div>
                <div class="col-4 p-0 pe-2 d-flex justify-content-end align-items-center" style="height:25px;">
                    <span style="font-size:22px;" aria-hidden="true">&raquo;</span>
                </div>
            </a>
            <div class="collapse px-1 align-middle text-truncate user-select-all border-bottom" style="height:20px;border-radius:3px;font-size:12px;" id="github-emoji_{{- emoji_temp -}}-card-description_collapse">
                {{- emoji -}}
            </div>
        </div>
    {% endfor -%}
    </div>
  </div>
</div>

