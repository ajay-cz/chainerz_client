# -*- coding: utf-8 -*-
import os
from flask import Flask, render_template, request, redirect, url_for
import textwrap

dev = 'True' == os.environ.get('isDev', 'True')
# configuration

# Flask app
app = Flask(__name__)
app.config.from_object(__name__)
app.debug = True
app.jinja_env.add_extension('jinja2.ext.do')

@app.route('/')
def home_page():
    """
    View Controller for the Home Page
    :return:
    """
    return render_template('index.html')


@app.route('/admin-dashboard')
def admin_dashboard():
    """

    :return:
    """

    return render_template('admin_dashboard.html')


@app.route('/consumer')
def consumer_dashboard():
    """

    :return:
    """

    return render_template('consumer.html')


@app.route('/login')
def login():
    """

    :return:
    """

    return render_template('login.html')


@app.route('/producer')
def producer_dashboard():
    """

    :return:
    """

    return render_template('producer.html')


@app.route('/wholesaler')
def wholesaler_dashboard():
    """

    :return:
    """

    return render_template('wholesaler.html')

@app.route('/contracts')
def blockdata():
    """

    :return:
    """