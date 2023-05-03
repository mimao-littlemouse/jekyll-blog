---
label: emoji chapter1
index: 0
text: github emoji
---

{% assign emojis = site.data.emojis -%}
<div id="articles-github-emoji" class="row w-100 h-100 p-0 m-0">
  <div class="col-1 h-100 p-0" style="font-size:12px;">
    <nav id="github-emoji_group_scrollspy_navbar" class="h-100 flex-column align-items-stretch border-end scrollbar scrollbar-blue overflow-y-auto">
      <nav class="nav nav-pills flex-column justify-content-center">
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
    </nav>
  </div>
  <div class="col-11 h-100 p-0 m-0">
    <div data-bs-spy="scroll" data-bs-target="#github-emoji_group_scrollspy_navbar" data-bs-smooth-scroll="true" class="d-flex justify-content-around flex-wrap scrollbar scrollbar-blue h-100 overflow-y-auto" tabindex="0"> 
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
            <div class="w-100 bg-body-tertiary ps-2" style="height:30px;line-height:30px;font-weight:bloder;" id="github-emoji_{{- emoji_temp -}}_{{- emojis_group -}}-group_scrollspy">
                {{- emojis_group -}}
            </div>
        {% endif -%}
        <div class="card my-1" style="min-width: 120px;max-width:160px;min-height:50px;max-height:60px;font-size:12px;">
            <a class="row g-0 d-flex justify-content-between align-items-center text-decoration-none" style="height:25px;" data-bs-toggle="collapse" href="#github-emoji_{{- emoji_temp -}}-card-description_collapse" role="button" aria-expanded="false" aria-controls="github-emoji_{{- emoji_temp -}}-card-description_collapse">
                <div class="col-8 text-truncate p-0 ps-2">
                    :{{- emoji -}}:
                </div>
                <div class="col-4 p-0 pe-2">
                    <span aria-hidden="true">&raquo;</span>
                </div>
            </a>
            <div class="collapse px-1 align-middle text-truncate user-select-all border-bottom" style="height:24px;border-radius:3px;" id="github-emoji_{{- emoji_temp -}}-card-description_collapse">
                {{- emoji -}}
            </div>
        </div>
    {% endfor -%}
    </div>
  </div>
</div>

