# Generated by Django 2.2.12 on 2022-04-29 03:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0008_auto_20220429_0353'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='gender',
            field=models.CharField(default='', max_length=7),
        ),
    ]