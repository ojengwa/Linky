{% extends "layout.swig" %}
{% block local_css %}
    <style type="text/css">
        .card-image {
            max-height: 120px;
            max-width: auto;
            margin-top: 10px;
        }
        .profile-image {
            max-width: 40%;
            border-radius: 100%;
        }
    </style>
{% endblock local_css %}
{% block sidenav %}
          <ul class="section table-of-contents">
            <li class="white"><input id="search" type="text" placeholder="Search Tags..."></li>
            {% for tag in tags %}
            <li class="names"><a href="/tags/{{tag.name}}" class="waves-effect waves-teal">#{{ tag.name | replace('#', '', 'g') }}</a></li>
            {% endfor %}
          </ul>
{% endblock sidenav %}
{% block content %}
      <div id="structure" class="scrollspy section">
        <div class="row">
          <table class="hoverable responsive-table" data-tableName="Test Table 2" id="links">
            <thead>
              <tr>
                  <th data-field="id">#</th>
                  <th data-field="url">URL</i></th>
                  <th data-field="author">Author</th>
                  <th data-field="date">Date Created</th>
              </tr>
            </thead>

            <tbody>
            {% for data in links | reverse %}
              {% set link = data.url %}
              {% set tags = link.tags %}
              <tr>
                <td>{{loop.index}}</td>
                <td><a href="{{link.url}}" target="_blank">{{link.url}}</a></td>
                <td>{{link.creator | capitalize}}</td>
                <td>{{link.createdAt | date('jS \o\f F, Y')}}</td>
              </tr>
            {% endfor %}
            </tbody>
          </table>
        </div>
      </div>
{% endblock content %}